import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import characterServices from 'services/characterServices';
import { RootState } from 'store/store';
import {
  QueryVariables, RequestStatus, ResponseType, PageSliceType,
} from 'types/baseTypes';
import { ChararterListItem } from 'types/characterTypes';

export const fetchCharacters = createAsyncThunk<ResponseType<ChararterListItem>, QueryVariables>(
  'characters/fetchCharacters',
  async ({ page, filter }, thunkAPI) => {
    try {
      const data = await characterServices.getPage({ page, filter });
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    data: [], status: RequestStatus.idle, info: null, error: null,
  } as PageSliceType<Array<ChararterListItem>>,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.status = RequestStatus.pending;
    });

    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.status = RequestStatus.fulfilled;
      state.data = action.payload.results;
      state.info = action.payload.info;
    });

    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.status = RequestStatus.rejected;
      state.error = action.payload;
      state.data = [];
      state.info = null;
    });
  },
});

export const selectCharacters = (state: RootState) => state.characters;

export default charactersSlice.reducer;
