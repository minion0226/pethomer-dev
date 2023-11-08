import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ThemeState {
  language: String
}

const initialState: ThemeState = {
  language: 'en'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLanguage: (state: ThemeState, action) => {
      state.language = action.payload
    }
  }
})

export const { setLanguage } =
  themeSlice.actions;

export default themeSlice.reducer;