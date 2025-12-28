import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';

const store=configureStore({
    reducer:{
        // here we will add all our slices
        auth:authReducer // auth is the name of the slice and authReducer is the reducer function imported from authSlice.js
                  
    }
});
export default store;
