import { createSlice } from '@reduxjs/toolkit';
import { clearAsyncStorage, deleteSpecificData, storeData, storeDataJSON } from '../../service/url/variable/asyncStorage';
import interestData from '../../service/url/variable/interestData';

export const checkInSlice = createSlice({
    name: 'checkin',
    initialState: {
        details: { title: "LGA", message: "" },
        display: true
    },
    reducers: {
        showMessage: (state, action) => {
            state.display = action.payload.display
            state.details = action.payload
        }
    },
});

export const { showMessage } = checkInSlice.actions;
export default checkInSlice.reducer;
