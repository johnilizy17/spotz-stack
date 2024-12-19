import { showMessage } from "react-native-flash-message";

export const handleApiError = (error: any, title?: string) => {
    const errorDetails = {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        message: error.message,
        timestamp: new Date().toISOString(),
    };

    showMessage({
        message: title ? title : "Error",
        description: error.message,
        type: "danger",
    });
};