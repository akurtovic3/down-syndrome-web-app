/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { ERROR_MESSAGES, TOAST_TYPE } from '../constants';

const initialState = {
  isVisible: false,
  message: '',
  type: TOAST_TYPE.ERROR,
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToastMessage: (state, action) => {
      state.type = action.payload.type || TOAST_TYPE.ERROR;
      state.isVisible = true;
      state.message = action.payload?.message || ERROR_MESSAGES.SOMETHING_WENT_WRONG;
    },
    showToastErrorMessage: (state, action) => {
      state.type = TOAST_TYPE.ERROR;
      state.isVisible = true;
      state.message = action?.payload || ERROR_MESSAGES.SOMETHING_WENT_WRONG;
    },
    showToastSuccessMessage: (state, action) => {
      state.type = TOAST_TYPE.SUCCESS;
      state.isVisible = true;
      state.message = action?.payload || ERROR_MESSAGES.SOMETHING_WENT_WRONG;
    },
    hideToast: (state) => {
      state.isVisible = false;
    },
  },
});

export const {
  showToastMessage, hideToast, showToastErrorMessage, showToastSuccessMessage,
} = toastSlice.actions;

export default toastSlice.reducer;
