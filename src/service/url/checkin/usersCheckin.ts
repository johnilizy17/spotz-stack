import checkinService from "../../checkin";
import SpotService from "../../spot";
import { getData } from "../variable/asyncStorage";

export const checkInLocation = async (payload: createCheckin) => {
    const { data } = await checkinService.post(`/api/v1/activeUser/check-in-to-spot?userId=${payload.userId}&spotId=${payload.spotId}&userLongitude=${payload.userLongitude}&userLatitude=${payload.userLatitude}&selfieUrl=${payload.selfieUrl}`, payload);
    return data
};


export const getAllUserChecked = async () => {
    const spotId = await getData("activeCheckIn")
    if (spotId) {
        const { data } = await checkinService.get(`/api/v1/activeUser/get-all-users/${spotId}`);
        return data.data
    } else {
        return []
    }
}

export const getSingleSpot = async () => {
    const spotId = await getData("activeCheckIn")
    if (spotId) {
        const { data } = await SpotService.get(`/api/v1/spots/${spotId}`);
        return data
    } else {
        return { name: "LA", id: "" }
    }
}

export const checkOut = async (userId: string) => {
    const spotId = await getData("activeCheckIn")
    if (spotId) {
        const data = await checkinService.post(`/api/v1/activeUser/check-out?spotId=${spotId}&userId=${userId}`);
        return data
    } else {
        return { name: "LA", id: "" }
    }
} 