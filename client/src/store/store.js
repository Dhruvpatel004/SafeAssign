import { configureStore } from '@reduxjs/toolkit';
import classReducer from './slice/classReducer';
const store = configureStore({
    reducer: {
        class: classReducer,
      },
});

export default store;
