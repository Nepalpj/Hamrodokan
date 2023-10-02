import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as api from "../apiRoute/api";
//all admin products
export const productsAdmin = createAsyncThunk("/admin/products",async(__,{rejectWithValue})=>{
    try {
        const res = await api.allAdminProducts();
        return res.data;
    } catch (error) {
        return rejectWithValue(error.res.data)
    }
})
const adminSlice = createSlice({
    name: "admin",
    initialState: {
        loading: "",
        error: "",
        message: "",
        adminProducts: [],
    },
    reducers:{
        clearError:(state)=>{
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(productsAdmin.pending,(state)=>{
            state.loading = true;
        })
        .addCase(productsAdmin.fulfilled,(state,action)=>{
            state.loading = false;
            state.adminProducts = action.payload.data;
        })
        .addCase(productsAdmin.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload.message;
        });
    },
});
export const {clearError} = adminSlice.actions;
export default adminSlice.reducer;