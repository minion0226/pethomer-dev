import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ErrorType {
  msg: String
}

interface AuthState {
  isAuthenticated: Boolean,

  authInfoLoaded: Boolean,

  loginInProgress: Boolean,
  loginError?: ErrorType,

  logoutInProgress: Boolean,
  logoutError?: ErrorType,

  signupInProgress: Boolean,
  signupError?: ErrorType,

  confirmInProgress: Boolean,
  confirmError?: ErrorType,

  authScopes: Array<String>,  
}

const initialState: AuthState = {
  isAuthenticated: false,
  authInfoLoaded:false,
  loginInProgress: false,
  logoutInProgress: false,
  signupInProgress: false,
  confirmInProgress: false,
  authScopes: []
};

export const authInfo = createAsyncThunk("auth/info", async () => {

});

export const login = createAsyncThunk("auth/login", async () => {

})

export const logout = createAsyncThunk("auth/logout", async () => {
  
})

export const signup = createAsyncThunk("auth/signup", async () => {
  
})

export const signupWithIdp = createAsyncThunk("auth/signup_idp", async () => {
  
})


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginStatus: (state, action) => {
      state.loginInProgress = action.payload;
    },
    setLogoutStatus: (state, action) => {
      state.signupInProgress = action.payload;
    },
    setSignupStatus: (state, action) => {
      state.signupInProgress = action.payload;
    },
    setConfirmStatus: (state, action) => {
      state.signupInProgress = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state: AuthState, action) => {
      state.loginInProgress = false;
    });
    builder.addCase(logout.fulfilled, (state: AuthState, action) => {
      state.logoutInProgress = false;
    });
    builder.addCase(signup.fulfilled, (state: AuthState, action) => {
      state.signupInProgress = false;
    });
  }
})

export const { setLoginStatus, setSignupStatus, setLogoutStatus, setConfirmStatus } =
  authSlice.actions;

export default authSlice.reducer;