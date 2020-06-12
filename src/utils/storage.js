import AsyncStorage from '@react-native-community/async-storage';

const storage = {
    setItem: async (name, value) => {
        try {
            await AsyncStorage.setItem(name, value);
        } catch (error) {
            // Error saving data
        }
    },

    getItem: async (name) => {
        try {
            return await AsyncStorage.getItem(name);
        } catch (error) {
            console.log(error)
            // Error retrieving data
        }
    },

    removeItem: async (name) => {
        try {
            const value = await AsyncStorage.removeItem(name);
            if (value !== null) {
                // We have data!!
                console.log(value);
            }
        } catch (error) {
            console.log(error)
            // Error retrieving data
        }
    }
};

export default storage;
