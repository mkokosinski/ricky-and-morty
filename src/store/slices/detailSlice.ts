import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import characterServices from 'services/characterServices';
import { RootState } from 'store/store';
import { RequestStatus, SliceType } from 'types/baseTypes';
import { Chararter } from 'types/characterTypes';

export const fetchDetail = createAsyncThunk<Chararter, string>('detail/fetchDetail', async (id, thunkAPI) => {
  try {
    const character = await characterServices.get(id);
    return character;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    data: null,
    status: RequestStatus.idle,
    error: null,
  } as SliceType<Chararter>,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetail.pending, (state) => {
      state.status = RequestStatus.pending;
      state.data = null;
      state.error = null;
    });

    builder.addCase(fetchDetail.fulfilled, (state, action) => {
      state.status = RequestStatus.fulfilled;
      state.data = action.payload;
    });

    builder.addCase(fetchDetail.rejected, (state, action) => {
      state.status = RequestStatus.rejected;
      state.error = action.payload;
      state.data = null;
    });
  },
});

export const selectDetail = (state: RootState) => state.detail;

export default detailSlice.reducer;
