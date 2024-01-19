import { createSlice } from '@reduxjs/toolkit';

const initialState = {    
    userName: null,
    firstName: null,
    lastName : null
  };
  
  const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
      recUser: (state, action) => {
       
        state.userName = action.payload.userName;
        state.firstName=action.payload.firstName;
        state.lastName = action.payload.lastName; 
      },
      noName: (state) => {
        
        state.userName = null;
        state.firstName = null;
        state.lastName= null
      },
    },
  });
  
  export const { recUser, noName } = userReducer.actions;
  export default userReducer.reducer;