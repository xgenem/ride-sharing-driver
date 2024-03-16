import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fakeApi} from '../../../services';
import {BookingsState} from './type';

export const bookingsInitialState: BookingsState = {
  bookings: [],
  loading: false,
  error: null,
};

const acceptSuccessBooking = createAsyncThunk(
  'bookings/acceptBooking',
  async (booking: Booking) => {
    booking.ride = {
      ...booking.ride,
      status: 'accepted',
    };
    return fakeApi(booking, 2000);
  },
);

const {actions, reducer} = createSlice({
  name: 'bookings',
  initialState: bookingsInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(acceptSuccessBooking.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(acceptSuccessBooking.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.bookings = state.bookings.map(booking =>
          booking.id === payload.id ? payload : booking,
        );
      });
  },
});

export const bookingActions = {
  ...actions,
  acceptSuccessBooking,
};
export default reducer;
