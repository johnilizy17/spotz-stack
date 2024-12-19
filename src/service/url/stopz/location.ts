import SpotService from "../../spot";

export const updateProfileService = async (payload: getLocationDTO) => {
    const data = await SpotService.put(`/api/v1/spots/search/byNameAndCurrentLocation`, payload);
    return data
};