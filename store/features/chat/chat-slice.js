import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

export const socket = io("wss://moisaic.onrender.com/", {
  transports: ["websocket"],
  auth: {
    authorization: "Bearer " + "localS",
  },
});

socket.on("connect", () => {
  console.log("connected");
});

const initialState = {
  currentMessage: "",
  messages: [],
  loading: false,
  error: false,
};

// send message
export const sendMessage = createAsyncThunk(
  "chat/sendMessage",
  async (message, thinkApi) => {
    console.log(message);
    const { rejectWithValue } = thinkApi;
    console.log(thinkApi);

    try {
      socket.emit("send-message", message);
      console.log("message sent");
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// // receive message
// export const receiveMessage = createAsyncThunk(
//   "chat/receiveMessage",
//   async ({ rejectWithValue }) => {
//     try {
//       socket.on("receive-message", (data) => {
//         console.log("message received");
//         console.log(data);
//         return data;
//       });
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   },
// );
export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setCurrentMessage: (state, action) => {
      const { payload } = action;
      state.currentMessage = payload;
    },
    setReceiveMessage: (state, action) => {
      const { payload } = action;
      state.messages.push(payload);
    },
    resetCurrentMessage: (state, action) => {
      const { payload } = action;
      console.log(payload);
      return {
        ...state,
        currentMessage: "",
        messages: [...state.messages, payload],
      };
    },
  },
});
export const { setCurrentMessage, setReceiveMessage, resetCurrentMessage } =
  chatSlice.actions;
export default chatSlice.reducer;
