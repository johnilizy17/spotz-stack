import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/userSlice';
import checkInReducer from '../slice/checkinSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    checkin: checkInReducer
  },
});
