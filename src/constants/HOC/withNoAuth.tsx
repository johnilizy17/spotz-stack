import React, { ReactNode } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ImageBackground } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
// Define the props type for AppLayout
interface AppLayoutProps {
    children: ReactNode; // Allows rendering any valid React element as children
    padding?: boolean;
}

const WithNoAuth: React.FC<AppLayoutProps> = ({ children, padding }) => {

    const numberPadding = padding ? 0:10

    const styles = StyleSheet.create({
        safeArea: {
            flex: 1,
            paddingTop: numberPadding
        }
    });

    return (
        <ImageBackground
            source={require('./background.png')} // Path to your image
            style={styles.safeArea}
            resizeMode="stretch" // Makes the image cover the entire container
        >
            {/* Main Body Content Section */}
            {children}
        </ImageBackground>
    );
};


export default WithNoAuth;
