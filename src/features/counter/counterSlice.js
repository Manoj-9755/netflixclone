import {  createSlice } from '@reduxjs/toolkit';






export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    counter:null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login:(state,action)=>{
      state.counter=action.payload;

    },
    logout:(state)=>{
      state.counter=null;
    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  
});

export const { login,logout} = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.counter;



export default counterSlice.reducer;