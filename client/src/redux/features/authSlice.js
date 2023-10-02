import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../apiRoute/api";

//profile
export const profile = createAsyncThunk("/single/user",
async (__, { rejectWithValue }) => {
  try {
    const response = await api.userProfile();
    
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
}
);
//avatar
export const updateUser = createAsyncThunk("/update/user",
async({updateForm,toast}, { rejectWithValue,dispatch }) => {
  try {
    const response = await api.userAvatar(updateForm);
    toast.success(response.data.message || "profile update successfully")
    dispatch(profile())
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
}
);
//user Register
export const register = createAsyncThunk(
  "/user/register",
  async ({ registerValue, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.userRegister(registerValue);
      toast.success(response.data.message || "register success");
      navigate("/login");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//changepassword
export const changePassword = createAsyncThunk(
  "/change/password",
  async ({changePasswordValue,toast,navigate}, { rejectWithValue,dispatch }) => {
    try {
      const response = await api.changePassword(changePasswordValue);
      toast.success(response.data.message || "password change success");
      navigate("/login");
      dispatch(setLogout())
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//userLogin
export const login = createAsyncThunk(
  "/user/login",
  async ({loginValue,toast,navigate}, { rejectWithValue }) => {
    try {
      const response = await api.userLogin(loginValue);
      toast.success(response.data.message || "login success")
      if(response.data.user.role === "admin"){
      navigate("/admin-namastebazzar/dashboard-panel")
      
      }else{
      navigate("/")

      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: "",
    isLoading:"",
    error: "",
    message: "",
    isAuthenticated: !!localStorage.getItem("token"),
    user: {},
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setLogout:(state)=>{
      localStorage.removeItem("token")
      state.user = null;
      state.isAuthenticated = false;
    },
    clearUser:(state)=>{
      state.user = null;
      state.isAuthenticated = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("token",action.payload.token) 
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(profile.pending, (state) => {
        state.loading = true;
      })
      .addCase(profile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(profile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(changePassword.fulfilled, (state,action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(changePassword.rejected, (state,action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
  },

});



export const { clearError,setLogout } = authSlice.actions;
export default authSlice.reducer;
