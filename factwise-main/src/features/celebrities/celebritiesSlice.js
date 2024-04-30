import { createSlice } from "@reduxjs/toolkit";
import data from '../../celebrities.json';

const initialState = {
  celebrities:data,
  isLoading:true,
  isError:false,
  edit:false,
  message:''
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    edit: (state,action) => {
      const resValue = state.celebrities.find((celebrity)=>celebrity.id === action.payload.id);
      resValue.description = action.payload.text;
    },
    clickEdit:(state,action)=>{
      const editValue = state.celebrities.find((celebrity)=>celebrity.id === action.payload.id);
      state.edit = true;
    }
  },
});

// Action creators are generated for each case reducer function
export const { edit,clickEdit} = counterSlice.actions;

export default counterSlice.reducer;
