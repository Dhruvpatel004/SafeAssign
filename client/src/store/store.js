import { combineReducers,configureStore } from '@reduxjs/toolkit';
import classReducer from './slice/classReducer';
import classroomReducer from './slice/classroomReducer';

const rootReducer = combineReducers({
  class: classReducer,
  classroom: classroomReducer,
});
const store = configureStore({
  reducer: rootReducer
});


export default store;
