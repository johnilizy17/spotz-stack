interface locationDetails {
    longitude: number;
    latitude: number;
}

interface nearbySpots {
    latitude: number;
    longitude: number;
    limit: number;
    maxDistance: number;
    userId: string;
}

interface searchSpotsByNameAndLocation {
    name: string;
    latitude: number;
    longitude: number;
}

interface searchSpotsByNameAndCity {
    name: string;
    city: string;
}

interface Spotz {
        "id": "string",
        "name": "string",
        "activeUserCount": 0,
        "selfieUrls": [
          "string"
        ],
        "address": "string",
        "location": {
          "type": "string",
          "coordinates": number[]
        },
        "geofenceRadius": 0,
        "photoUrl": "string",
        "editorialSummary": "string",
        "createdAt": 0,
        "updatedAt": 0
}
