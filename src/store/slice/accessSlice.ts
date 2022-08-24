import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

 interface state {
  data: string;
}



export const accessTokenSlice = createSlice({
  name: 'accessToken',
  initialState:{
    data:"",
  },
  reducers: {
   

    addAccessToken:(state:state,action:PayloadAction<string>) => {
      state.data = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAccessToken } = accessTokenSlice.actions;

export default accessTokenSlice.reducer