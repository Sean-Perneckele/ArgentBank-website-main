import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    email: null,
    password: null,
    token: null
  };
  
  const singInSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state, action) => {
        state.isAuthenticated = true;
        state.email = action.payload.email;
        state.password=action.payload.password;
        state.token = action.payload.token; 
      },
      logout: (state) => {
        state.isAuthenticated = false;
        state.email = null;
        state.password = null;
        state.token= null
      },
    },
  });
  
  export const { login, logout } = singInSlice.actions;
  export default singInSlice.reducer;