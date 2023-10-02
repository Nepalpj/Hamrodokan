import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../apiRoute/api";

//get all product
export const allproducts = createAsyncThunk(
  "/all/products",
  async (__, { rejectWithValue }) => {
    try {
      const response = await api.getProducts();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const singleProduct = createAsyncThunk(
  "/single/product",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getProduct(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: "",
    error: "",
    message: "",
    products: [],
    product: {},
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allproducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(allproducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
      })
      .addCase(allproducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(singleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(singleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload.data;
      })
      .addCase(singleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});
export const { clearError } = productSlice.actions;
export default productSlice.reducer;
