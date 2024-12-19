import ImageService from "../../image";
import ImageUploadService from "../../imageUpload";

export const uploadImageService = async (payload) => {
    console.log(payload)
    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = payload.image;
    let filename = localUri.split('/').pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();
    // Assume "photo" is the name of the form field the server expects
    formData.append('file', { uri: localUri, name: filename, type });

    const { data } = await ImageUploadService.post(`api/v2/blobs/upload-selfie?userId=${payload.userId}`, formData);
    return data
};

export const getSingleService = async (userId) => {
    const { data } = await ImageService.get(`/api/v2/blobs/selfies/${userId}`);
    return data
}