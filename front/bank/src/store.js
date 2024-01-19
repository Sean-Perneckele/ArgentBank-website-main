

import { configureStore } from "@reduxjs/toolkit"
import singInSlice from './pages/singIn/Sing-inSlice';
import userReducer from './pages/user/userSlice'

export const store = configureStore({
  reducer: {
    auth: singInSlice,
    user: userReducer,
  },
});


