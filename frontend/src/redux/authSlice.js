import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    authentication: false,
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const LoginUser = createAsyncThunk("user/LoginUser", async (user, thunkAPI) => {
    try {
        const response = await axios.post('http://localhost:5000/login', {
            email: user.email,
            password: user.password
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getMe = createAsyncThunk("user/getMe", async(_, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:5000/me');
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        } else {
            return thunkAPI.rejectWithValue("You are not logged in");
        }
    }
});

// export const getMe = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
//     if (this.state.authentication === true) {
//         console.log(this.state.authentication)
//         try {
//             const response = await axios.get('http://localhost:5000/me');
//             return response.data;
//         } catch (error) {
//             if (error.response) {
//                 const message = error.response.data.msg;
//                 return thunkAPI.rejectWithValue(message);
//             }
//         }
//     }
//     else {
//         console.log(this.state.authentication)
//     }

// });

export const LogOut = createAsyncThunk("user/LogOut", async () => {
    await axios.delete('http://localhost:5000/logout');
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(LoginUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.authentication = true;
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // Get User Login
        builder.addCase(getMe.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(getMe.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;