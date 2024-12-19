import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';
import OnBoarding from '../screens/auth/onboarding';
import GetStarted from '../screens/auth/getStarted';
import OTPVerificationScreen from '../screens/auth/OTP';
import EmailVerification from '../screens/auth/EmailVerification';
import NameVerification from '../screens/auth/NameVerification';
import DateVerification from '../screens/auth/DateVerification';
import HeightSelectionScreen from '../screens/auth/HeightVerification';
import OTPLoginScreen from '../screens/auth/login/LoginOTP';
import Login from '../screens/auth/login';
import Permission from '../screens/dashboard/Permission';
import Dashboard from '../screens/dashboard';
import Map from '../screens/dashboard/Map';
import Message from '../screens/dashboard/Message';

const Stack = createStackNavigator();

export default function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerShown: false,
                }}
                initialRouteName={'Onboarding'}>
                <Stack.Screen name="OnBoarding" component={OnBoarding} />
                <Stack.Screen name="Logout" component={OnBoarding} />
                <Stack.Screen name="GetStarted" component={GetStarted} />
                <Stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen} />
                <Stack.Screen name="EmailVerification" component={EmailVerification} />
                <Stack.Screen name="NameVerification" component={NameVerification} />
                <Stack.Screen name="DateVerification" component={DateVerification} />
                <Stack.Screen name="HeightSelectionScreen" component={HeightSelectionScreen} />
                <Stack.Screen name="OTPLoginScreen" component={OTPLoginScreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Permission" component={Permission} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Map" component={Map} />
                <Stack.Screen name="Message" component={Message} />
            </Stack.Navigator>
            <FlashMessage position="top" />
        </NavigationContainer>
    )
}