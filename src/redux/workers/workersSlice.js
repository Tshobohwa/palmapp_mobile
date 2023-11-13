import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getWorkers = createAsyncThunk("cart/getWorkers", async () => {
  try {
    const resp = await axios("https://randomuser.me/api/?results=50");
    if (!resp)
      throw new Error("An error occured while trying to access the data");
    return resp.data.results;
  } catch (err) {
    console.log(err);
  }
});

const initialState = {
  workers: [],
  isLoading: false,
};

const workersSlice = createSlice({
  name: "workers",
  initialState,
  reducers: {},
  extraReducers: (builer) => {
    builer
      .addCase(getWorkers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWorkers.fulfilled, (state, action) => {
        state.isLoading = false;
        const workers = [];
        action.payload.forEach((person) => {
          const worker = {
            firstName: person.name.first,
            lastName: person.name.last,
            gender: person.gender,
            id: person.id.value,
            picture: person.picture,
          };
          workers.push(worker);
        });
        state.workers = workers;
      })
      .addCase(getWorkers.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default workersSlice.reducer;
