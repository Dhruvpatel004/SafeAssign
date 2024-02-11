// src/store/classSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  classData: [],
  loading: false,
  error: null,
};

const classSlice = createSlice({
  name: 'class',
  initialState,
  reducers: {
    setClassData(state, action) {
      state.classData = action.payload;
      state.loading = false;
      state.error = null;
    },
    addClassData(state, action) {
      state.classData.push(action.payload);
    },
    removeClassData(state, action) {
      state.classData = state.classData.filter(classItem => classItem.classroomID !== action.payload.classroomID);
    },
    updateClassData(state, action) {
      const updatedClass = action.payload;
      state.classData = state.classData.map(classItem =>
        classItem.classroomID === updatedClass.classroomID ? updatedClass : classItem
      );
    },
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setClassData,
  addClassData,
  removeClassData,
  updateClassData,
  setLoading,
  setError,
} = classSlice.actions;

export default classSlice.reducer;
