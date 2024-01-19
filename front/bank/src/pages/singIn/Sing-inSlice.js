import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    password: null,
    token: null
  };
  
  const singInSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.password=action.payload.password;
        state.token = action.payload.token; 
      },
      logout: (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.password = null;
        state.token= null
      },
    },
  });
  
  export const { login, logout } = singInSlice.actions;
  export default singInSlice.reducer;