import { showMessage } from 'react-native-flash-message';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

export const convertImageToBase64 = async (filePath: any, setImageUrl:any) => {
    try {
        const base64String = await FileSystem.readAsStringAsync(filePath, {
          encoding: FileSystem.EncodingType.Base64,
        });
        setImageUrl(base64String)
      } catch (error) {
        showMessage({
            message: "Image",
            description: `Error converting image:`,
            type: "danger",
        });
      }
};
