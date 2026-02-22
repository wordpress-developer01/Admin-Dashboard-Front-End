import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  user: {
    name: "Admin",
    occupation: "Dashboard Manager",
    role: "admin"
  },
};
export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers:  {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
})

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;