import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    className: "",
    classID: "",
    classCode: "",
    userRole: "",
    ownerName: "",
    ownerAvatar: "",
    students: [],
    teachers: [],
    anouncements: [],
    assignments: [],
    materials: [],
    loading: false,
    error: null,
};

const classroomSlice = createSlice({
    name: "classroom",
    initialState,
    reducers: {
        setClassDetails: (state, action) => {
            const {
                classID,
                classCode,
                className,
                userRole,
                ownerName,
                ownerAvatar
            } = action.payload;

            state.classID = classID;
            state.classCode = classCode;
            state.className = className;
            state.userRole = userRole;
            state.ownerName = ownerName;
            state.ownerAvatar = ownerAvatar;
        },
        setClassStudents(state, action) {
            state.students = action.payload;
        },
        setClassTeachers(state, action) {
            state.teachers = action.payload;
        },
        updateStudentToTeacher(state, action) {
            state.teachers.push(action.payload);
            state.students = state.students.filter((student) => student._id !== action.payload._id);
        },
        updateTeacherToStudent(state, action) {
            state.students.push(action.payload);
            state.teachers = state.teachers.filter((teacher) => teacher._id !== action.payload._id);
        },
        removeStudent(state, action) {
            state.students = state.students.filter((student) => student._id !== action.payload);
        },
        removeTeacher(state, action) {
            state.teachers = state.teachers.filter((teacher) => teacher._id !== action.payload);
        },
        
        setClassAnouncements(state, action) {
            state.anouncements = action.payload;
        },
        removeClassAnouncement(state, action) {
            state.anouncements = state.anouncements.filter((anouncement) => anouncement._id !== action.payload);
        },
        addClassAnouncement(state, action) {
            state.anouncements.push(action.payload);
        },
        updateClassAnouncement(state, action) {
            const updatedAnouncement = action.payload;
            state.anouncements = state.anouncements.map((anouncement) =>
                anouncement._id === updatedAnouncement._id ? updatedAnouncement : anouncement
            );
        },

        setClassAssignments(state, action) {
            state.assignments = action.payload;
        },
        removeClassAssignment(state, action) {
            state.assignments = state.assignments.filter((assignment) => assignment._id !== action.payload);
        },
        addClassAssignment(state, action) {
            state.assignments.push(action.payload);
        },
        updateClassAssignment(state, action) {
            const updatedAssignment = action.payload;
            state.assignments = state.assignments.map((assignment) =>
                assignment._id === updatedAssignment._id ? updatedAssignment : assignment
            );
        },
        
        
    },
});

export const {
    setClassDetails,
    setClassStudents,
    setClassTeachers,
    updateStudentToTeacher,
    updateTeacherToStudent,
    removeStudent,
    removeTeacher,
    setClassAnouncements,
    removeClassAnouncement,
    addClassAnouncement,
    updateClassAnouncement,
    setClassAssignments,
    removeClassAssignment,
    addClassAssignment,
    updateClassAssignment,
} = classroomSlice.actions;

export default classroomSlice.reducer;