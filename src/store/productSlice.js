import { createSlice } from '@reduxjs/toolkit';

const initialState = [] ;

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setList: ( state, action) => {
      return  (state = action.payload);
    }
 
  },
});

export const { setList } = productSlice.actions;

export default productSlice.reducer;