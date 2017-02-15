import {
  FETCH_USERS
} from './types';

export function fetchUsers() {
  return {
    type: FETCH_USERS,
    payload: [
      { name: 'Mady' },
      { name: 'Heather' },
      { name: 'James' }
    ]
  }
}
