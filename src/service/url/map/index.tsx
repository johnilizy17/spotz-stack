import SpotService from "../../spot";
const handleApiError = (error: any, endpoint: string) => {
    const errorDetails = {
      endpoint,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message,
      timestamp: new Date().toISOString(),
    };
    
    console.error("Spot API Error:", errorDetails);
    throw errorDetails; // Throw enriched error object
  };
export const getUserLocation = async (payload: locationDetails) => {
    const { data } = await SpotService.get(`api/v1/spots/search/currentSpot?longitude=${payload.longitude}&&latitude=${payload.latitude}`);
    return data
};

export const getAllSpots = async () => {
    const {data} = await SpotService.get(`api/v1/spots/get-all`);
    return data
}

export const getSpotById = async (id: string) => {
    const {data} = await SpotService.get(`api/v1/spots/${id}`);
    return data
}

export const getNearbySpots = async (payload: nearbySpots) => {
    const {data} = await SpotService.get(`api/v1/spots/search/nearbySpots?longitude=${payload.longitude}&latitude=${payload.latitude}&maxDistance=${payload.maxDistance}&limit=${payload.limit}&userId=${payload.userId}`);

    return data
}

export const searchSpotsByName = async (name: string) => {
    const {data} = await SpotService.post(`api/v1/spots/search/byName`, name);
    return data
}

export const searchSpotsByNameAndLocation = async (payload: searchSpotsByNameAndLocation) => {
    try {
        const endpoint = `api/v1/spots/search/byNameAndCurrentLocation?name=${payload.name}&longitude=${payload.longitude}&latitude=${payload.latitude}`;
        const { data } = await SpotService.get(endpoint);
        return data;
      } catch (error) {
        return handleApiError(error, 'searchSpotsByNameAndLocation');
      }
}

export const getSpotsByNameAndCity = async (payload: searchSpotsByNameAndCity) => {
    const {data} = await SpotService.post(`api/v1/spots/search/byNameAndCity`, payload);
    return data
}
