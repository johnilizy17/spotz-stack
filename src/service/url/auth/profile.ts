import Service from "../../service";

export const getProfileService = async (payload:profileDto) => {
    const { data } = await Service.get(`api/v1/users/${payload.userId}`);
    return data
};

export const updateProfileService = async (payload:profileUpdateDto) => {
    const data  = await Service.put(`api/v1/users/${payload.userId}`, payload.data);
    return data
};