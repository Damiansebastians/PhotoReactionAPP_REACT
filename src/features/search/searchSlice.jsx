import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const keyApi = "s2NAxr4Z7c54rImSZjSVqc22KmH6QR-LoDJl1c7gFuw";

let initialState = {
  list: [],
  error: null,
};

export const searchPhoto = createAsyncThunk(
  "search/searchPhoto",
  async (arg, thunkAPI) => {
    try {
      if (!arg.search || arg.search === "") {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?client_id=${keyApi}&count=30`
        );
        const data = await response.json();
        return [...data];
      } else {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?client_id=${keyApi}&query=${arg.search}&per_page=30&page=${arg.page}`
        );
        const data = await response.json();
        return [...data.results];
      }
    } catch (error) {
      throw new Error(`Failed fetching the data: ${error}`);
    }
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    sortSearch: (state, action) => {
      const { payload } = action;
      switch (payload) {
        case "height":
          state.list = state.list.slice().sort((a, b) => a.height - b.height);
          break;
        case "width":
          state.list = state.list.slice().sort((a, b) => a.width - b.width);
          break;
        case "likes":
          state.list = state.list.slice().sort((a, b) => a.likes - b.likes);
          break;
        case "dateAdd":
          state.list = state.list.slice().sort((a, b) => a.date - b.date);
          break;
        default:
          state.list = state.list.slice().sort((a, b) => a.id - b.id);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchPhoto.pending, (state) => {
        console.log("Loading...");
      })
      .addCase(searchPhoto.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(searchPhoto.rejected, (state, action) => {
        state.error = action.error.message;
        console.log("Failed fetching the data");
      });
  },
});

export const { sortSearch } = searchSlice.actions;
export default searchSlice.reducer;
