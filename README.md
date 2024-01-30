# SafeAssign

SafeAssign : An E-earning management system with integrated document similarity detection

## Installation

1. Clone the repository or Dowload this Folder in your pc :
```bash 
git clone https://github.com/Dhruvpatel004/SafeAssign.git
```

## Setup Client side
1. Go to the client directory:
```bash
cd client
```
2. Install client-side dependencies:
```bash
npm install
```
3. Start the client-side application::
```bash
npm run dev
```

## Setup Server side
1. Go to the server directory:
```bash
cd server
```
2. Install server-side dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a .env file in the root directory of the server-side project and add the following environment variables:
```bash
APP_PORT=5000
MONGO_URL=your-mongodb-url
CLIENT_ID=your-client-id
CLIENT_SECRET=your-client-secret
CLIENT_URL=http://localhost:5173/
```
Replace your-mongodb-url, your-client-id, and your-client-secret with the appropriate values for your application.

4. Start the server-side application::
```bash
nodemon
```
## Setup Flsk Api for NLP - Doc-similarity 
1. Go to the server directory:
```bash
cd flaskApiNLP
```
2. Create a virtual environment (venv)
```bash
python -m venv myenv
```
3. Activate the virtual environment
```bash
myenv\Scripts\activate
```
4. Install Python packages listed in a requirements.txt in virtual environment
```bash
myenv\Scripts\activate
```
5. Start Flask Api server 
```bash
python app.py
```

## To Run both server and client in one command
1. Install concurrently dependencies:
```bash
npm install --save-dev concurrently
```
2. To start Both server :
```bash
npm start
```

## Usage

[Provide instructions on how to use your project]

## Contributing

[Provide guidelines for contributing to your project]

## License


Feel free to customize the instructions and sections further based on your project's specific needs and requirements. Ensure that the instructions are clear and easy to follow for users who want to install and run your application.

