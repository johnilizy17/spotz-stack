import { createSlice } from '@reduxjs/toolkit';
import { clearAsyncStorage, deleteSpecificData, storeData, storeDataJSON } from '../../service/url/variable/asyncStorage';
import interestData from '../../service/url/variable/interestData';

export const checkInSlice = createSlice({
    name: 'checkin',
    initialState: {
        location: { name: "LGA", id: "" },
        arrayData: []
    },
    reducers: {
        storeCheckData: (state, action) => {
            state.arrayData = action.payload
        },
        storeCheckInLocation: (state, action) => {
            state.location = action.payload
        },
        logoutCheckIn: state => {
            deleteSpecificData("activeCheckIn")
            state.arrayData = [];
            state.location = { name: "", id: "" };
        },
    },
});

export const {
    storeCheckData,
    storeCheckInLocation,
    logoutCheckIn
} = checkInSlice.actions;
export default checkInSlice.reducer;
