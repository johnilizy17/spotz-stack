import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeDataJSON = async (key: string, value: any) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
        console.error('Error saving data: ', error);
    }
};

export const getDataJSON = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.error('Error retrieving data: ', error);
    }
};

export const storeData = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.error('Error saving data: ', error);
    }
};

export const deleteSpecificData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log(`Data with key '${key}' has been deleted.`);
    } catch (error) {
        console.error("Error deleting data from AsyncStorage:", error);
    }
};

export const getData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? jsonValue : null;
    } catch (error) {
        console.error('Error retrieving data: ', error);
    }
};

export const clearAsyncStorage = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.error('Error clearing AsyncStorage:', error);
    }
};