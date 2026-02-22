import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './index';


const store =configureStore({
  reducer: {
    global: globalReducer,
  },
})

export default store;