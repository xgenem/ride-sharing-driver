import {Ride} from './ride';

export interface Booking {
  id: string;
  ride: Ride;
  type: 'accepted' | 'pending' | 'rejected';
}
