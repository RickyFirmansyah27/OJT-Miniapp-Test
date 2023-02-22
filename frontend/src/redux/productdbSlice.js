import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from 'axios'

export const getproducts = createAsyncThunk("products/getproducts", async() =>{
    const response = await axios.get('http://localhost:8000/products');
    return response.data;
});


const productsEntity = createEntityAdapter({
  selectId:(products) => products.id
})

const productdbSlice = createSlice({
  name: "products",
  initialState: productsEntity.getInitialState(),
  extraReducers: (builder) => {
    builder
      .addCase(getproducts.fulfilled, (state, action) => {
        productsEntity.setAll(state, action.payload);
      })
  },

});


export const productSelector = productsEntity.getSelectors(
  state => state.productsdb
)
export default productdbSlice.reducer;




