import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../api'

export const Product = createAsyncThunk('product/Product', async () => {
    try {
        const response = await api.products();
        return response.data;
    } catch (err) {
        console.log(err);
    }
})


const productsSlice = createSlice({
    name: 'product',
    initialState: {
        products: null,
        error: "",
        loading: false,
    },
    extraReducers: {

        [Product.pending]: (state, action) => {
            state.loading = true;

        },
        [Product.fulfilled]: (state, action) => {
            state.loading = false;
            state.products = action.payload
            localStorage.setItem("products",JSON.stringify({...action.payload}));
        },
        [Product.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default productsSlice.reducer