#flask api which take input of files and return the result in formet of json


from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS
import spacy
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from docx import Document
import PyPDF2

app = Flask(__name__)
api = Api(app)
CORS(app)  # Enable CORS for all routes

# Load spaCy English model
nlp = spacy.load('en_core_web_sm')

class DocumentSimilarity(Resource):
    def post(self):
        try:
            uploaded_files = request.files.getlist('files')
            similarity_threshold = float(request.form['threshold'])



            input_documents = [read_text(file) for file in uploaded_files]
            file_names = [file.filename for file in uploaded_files]

            # Preprocess and vectorize documents
            tfidf_matrix = vectorize_documents(input_documents)

            # Calculate similarity matrix
            similarity_matrix = calculate_similarity(tfidf_matrix)

            # Process results
            result_data = []

            for i in range(len(input_documents)):
                doc_results = [
                    {
                        'file_name': file_names[j],
                        'similarity': similarity_matrix[i][j]
                    }
                    for j in range(len(input_documents)) if i != j
                ]

                # Calculate average similarity without considering self-similarity
                avg_similarity = sum(similarity_matrix[i][j] for j in range(len(input_documents)) if i != j) / (len(input_documents) - 1)

                # Filter results based on similarity threshold
                filtered_results = [result for result in doc_results if result['similarity'] >= similarity_threshold]

                result_data.append({
                    'file_name': file_names[i],
                    'results': filtered_results,
                    'average_similarity': avg_similarity
                })

            return {'result_data': result_data}

        except Exception as e:
            print("Error:", str(e))  # Print the exception for debugging
            return {'error': 'An error occurred while processing the files.'}, 500

api.add_resource(DocumentSimilarity, '/document-similarity')

# Additional functions
def read_pdf(file):
    # Read the content of the PDF file
    text = ""
    pdf_reader = PyPDF2.PdfReader(file)
    for page_num in range(len(pdf_reader.pages)):
        text += pdf_reader.pages[page_num].extract_text()
    return text

def read_word(file):
    # Read the content of the Word document
    text = ""
    with file:
        doc = Document(file)
        for paragraph in doc.paragraphs:
            text += paragraph.text + '\n'
    return text

def read_text(file):
    if isinstance(file, str):
        # If the input is regular text, return as is
        return file
    elif hasattr(file, "filename") and file.filename.lower().endswith('.pdf'):
        # If the file is a PDF, use the PDF reader
        return read_pdf(file)
    elif hasattr(file, "filename") and file.filename.lower().endswith('.docx'):
        # If the file is a Word document, use the Word reader
        return read_word(file)
    else:
        # Unsupported file format
        raise ValueError("Unsupported file format")

def vectorize_documents(documents):
    tfidf_vectorizer = TfidfVectorizer(stop_words='english', preprocessor=preprocess_text)
    tfidf_matrix = tfidf_vectorizer.fit_transform(documents)
    return tfidf_matrix

def calculate_similarity(matrix):
    similarity_matrix = cosine_similarity(matrix, matrix)
    return similarity_matrix

def preprocess_text(text):
    # Tokenize and lemmatize text
    doc = nlp(text)
    tokens = [token.lemma_ for token in doc if not token.is_stop and token.is_alpha]
    return ' '.join(tokens)

if __name__ == '__main__':
    app.run(port=8080)
