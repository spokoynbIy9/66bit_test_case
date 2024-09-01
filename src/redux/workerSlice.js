import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWorkerById = createAsyncThunk(
  "worker/fetchWorkerById",
  async (id) => {
    const response = await axios.get(
      `https://frontend-test-api.stk8s.66bit.ru/api/Employee/${id}`
    );
    return response.data;
  }
);

const workerSlice = createSlice({
  name: "worker",
  initialState: {
    worker: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkerById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWorkerById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.worker = action.payload;
      })
      .addCase(fetchWorkerById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default workerSlice.reducer;
