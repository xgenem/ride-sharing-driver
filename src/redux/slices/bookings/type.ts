import {Booking} from '../../../models/bookings';

export type BookingsState = {
  bookings: Booking[];
  loading: boolean;
  error: string | null;
};
