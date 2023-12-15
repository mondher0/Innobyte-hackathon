// this is a testing slice
import { createSlice } from "@reduxjs/toolkit";
const testingSlice = createSlice({
  name: "testing",
  initialState: {
    name: "testing",
  },
  reducers: {},
});

export default testingSlice.reducer;
