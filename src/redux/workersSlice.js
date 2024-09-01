import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchWorkers = createAsyncThunk(
  "workers/fetchWorkers",
  async ({ page = 1, count = 10, filters = {} }) => {
    const baseUrl = "https://frontend-test-api.stk8s.66bit.ru/api/Employee";
    const params = new URLSearchParams();

    if (filters.name) params.append("Name", filters.name);
    ["gender", "position", "stack"].forEach((filterName) => {
      filters[filterName]?.forEach((value) => {
        params.append(
          filterName.charAt(0).toUpperCase() + filterName.slice(1),
          value
        );
      });
    });

    params.append("Page", page);
    params.append("Count", count);
    const url = `${baseUrl}?${params.toString()}`;
    const response = await axios.get(url);
    return response.data;
  }
);

const workersSlice = createSlice({
  name: "workers",
  initialState: {
    workers: [],
    status: "idle",
    error: null,
    filters: {
      name: "",
      gender: [],
      position: [],
      stack: [],
    },
    page: 1,
    count: 10,
    hasMore: true,
  },
  reducers: {
    setFilter: (state, action) => {
      const { name, value } = action.payload;
      if (name !== "name") {
        if (!state.filters[name].includes(value)) {
          state.filters[name].push(value);
        }
      } else {
        state.filters[name] = value;
      }
      state.page = 1;
      state.workers = [];
      state.hasMore = true;
    },
    removeFilterValue: (state, action) => {
      const { name, value } = action.payload;
      state.filters[name] = state.filters[name].filter(
        (filterValue) => filterValue !== value
      );
      state.page = 1;
      state.workers = [];
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWorkers.fulfilled, (state, action) => {
        state.status = "succeeded";

        const newWorkers = action.payload.filter(
          (newWorker) =>
            !state.workers.some(
              (existingWorker) => existingWorker.id === newWorker.id
            )
        );
        if (newWorkers.length > 0) {
          state.workers = [...state.workers, ...newWorkers];
          state.page += 1;
        } else {
          state.hasMore = false;
        }
      })
      .addCase(fetchWorkers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setFilter, removeFilterValue, clearFilters } =
  workersSlice.actions;
export default workersSlice.reducer;
