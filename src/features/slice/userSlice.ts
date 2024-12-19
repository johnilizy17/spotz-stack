import { createSlice } from '@reduxjs/toolkit';
import { clearAsyncStorage, storeDataJSON } from '../../service/url/variable/asyncStorage';
import interestData from '../../service/url/variable/interestData';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: { email: "", fullname: "" },
        onboardingData: {},
        interest: interestData,
        onboarding: true
    },
    reducers: {
        login: (state, action) => {
            clearAsyncStorage()
            storeDataJSON("login", action.payload)
            state.user = action.payload
        },
        onboarding: (state, action) => {
            state.onboardingData = action.payload
        },
        storingInterest: (state, action) => {
            state.interest = action.payload
        },
        storage: state => {
            state.user = { email: "", fullname: "" };
        },
        logout: state => {
            clearAsyncStorage()
            state.user = { email: "", fullname: "" };
        },
    },
});

export const { login, logout, onboarding, storingInterest } = userSlice.actions;
export default userSlice.reducer;
