import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  roles: "",
  skils: "",
  bio: "",
  cv: "",
  jobTitle: "",
  externalLinks: "",
};

// register
export const register = createAsyncThunk(
  "auth/register",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post("/register", user);
      console.log(response);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// login
export const login = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post("/login", user);
      console.log(response);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { payload } = action;
      const { name, value } = payload;
      state[name] = value;
    },
  },
});
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
