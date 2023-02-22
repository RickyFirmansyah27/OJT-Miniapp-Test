import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data;
});



const productEntity = createEntityAdapter({
    selectId: (products) => products.id
})


const productsSlice = createSlice({
    name: 'products',
    initialState: productEntity.getInitialState(),
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                productEntity.setAll(state, action.payload);
            })
    },
});

export default productsSlice.reducer;

export const productSelector = productEntity.getSelectors(
    state => state.products
)