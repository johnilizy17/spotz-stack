import SubService from "../../sub";

export const getSubService = async () => {
    const data  = await SubService.get(`/api/v1/subscriptions/raw`);
    return data
};