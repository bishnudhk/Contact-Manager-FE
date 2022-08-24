import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Contact from "../../domain/contact";

 interface state {
  data:Contact[];
}



export const contactSlice = createSlice({
  name: 'contactSlice',
  initialState:{
    data: [] as Contact[],
  },
  reducers: {

    addContact:(state:state,action:PayloadAction<Contact[]>) => {
      state.data = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addContact } = contactSlice.actions;

export default contactSlice.reducer

