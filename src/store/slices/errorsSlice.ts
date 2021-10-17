import { createSlice } from '@reduxjs/toolkit';

import apiHelpers from 'api/apiHelpers';
import { RootState } from 'store/store';

export const errosSlice = createSlice({
  name: 'characters',
  initialState: {
    isDataError: false,
    messages: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isDataError = apiHelpers.ERROR_CODE.REQUEST.test(action.statusCode);
          state.messages = action.payload.errors;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/pending') || action.type.endsWith('/fulfilled'),
        (state) => {
          state.isDataError = false;
          state.messages = [];
        },
      );
  },
});

export const selectErrors = (state: RootState) => state.errors;

export default errosSlice.reducer;
