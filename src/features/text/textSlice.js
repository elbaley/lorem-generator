import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchText = createAsyncThunk(
  "users/fetchText",
  async (options, thunkAPI) => {
    const { length, format } = options;
    console.log("fetching data with params:", length, format);

    const response = await axios(
      `https://baconipsum.com/api/?type=all-meat&paras=${length}&format=${format}`
    ).then((res) => res.data);

    return response;
  }
);

const initialState = {
  value: 0,
  text: "",
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchText.fulfilled, (state, action) => {
      // Add user to the state array
      state.text = action.payload;
    });
    builder.addCase(fetchText.rejected, (state, action) => {
      console.log("reject oldu");
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = textSlice.actions;

export default textSlice.reducer;
