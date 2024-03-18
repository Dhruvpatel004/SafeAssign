import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    className: "",
    classID: "",
    classCode: "",
    userRole: "",
    ownerName: "",
    ownerAvatar: "",
    announcements: [],
    students:[],
    teachers:[],
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
   
        setClassAnnouncements(state, action) {
            state.announcements = action.payload;
            state.loading = false;
            state.error = null;
        },
        
        removeClassAnnouncement(state, action) {
            state.announcements = state.announcements.filter((announcement) => announcement._id !== action.payload);
        },
        
        addClassAnnouncement(state, action) {
            state.announcements.unshift(action.payload);
            // state.announcements.push(action.payload);
        },
        
        updateClassAnnouncement(state, action) {
            const updatedAnnouncement = action.payload;
            state.announcements = state.announcements.map((announcement) =>
                announcement._id === updatedAnnouncement._id ? updatedAnnouncement : announcement
            );
        },

        setStudents(state,action){
            state.students = action.payload;
        },

        setTeachers(state,action){
            state.teachers=action.payload;
        }
    },
});

export const {
    setClassDetails,
    setClassAnnouncements,
    removeClassAnnouncement,
    addClassAnnouncement,
    updateClassAnnouncement,
    setStudents,
    setTeachers
} = classroomSlice.actions;

export default classroomSlice.reducer;
