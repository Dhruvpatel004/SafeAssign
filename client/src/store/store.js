import { combineReducers,configureStore } from '@reduxjs/toolkit';
import classReducer from './slice/classReducer';
import classroomReducer from './slice/classroomReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  class: classReducer,
  classroom: classroomReducer,
});


const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer
});


export const persistor = persistStore(store);
