import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GenderMeet from '../screens/auth/GenderMeet';
import SelectInerest from '../screens/auth/SelectInterest';
import SelectPrompts from '../screens/auth/SelectPrompts';
import CheckInSelfie from '../screens/auth/CheckInSelfie';
import CameraScreen from '../screens/auth/CameraScreen';
import SuccessScreen from '../screens/auth/SuccessScreen';
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
import Match from '../screens/dashboard/Match';
import MatchGenerate from '../screens/dashboard/MatchGenerate';
import PronounsData from '../screens/auth/PronounsSelect';
import Ethnicity from '../screens/auth/Ethnicity';
import IdentityMeet from '../screens/auth/IdentityMeet';
import Setting from '../screens/dashboard/Setting';
import CheckIn from '../component/dashboard/component/checkIn/indext';
import CheckInSelfiePage from '../screens/dashboard/checkin/CheckInSelfiePage';
import CameraScreenPage from '../screens/dashboard/checkin/CameralScreen';

const SignedOutStack = createNativeStackNavigator({
  screens: {
    OnBoarding,
    Dashboard,
    Message,
    GetStarted,
    OTPVerificationScreen,
    EmailVerification,
    NameVerification,
    DateVerification,
    HeightSelectionScreen,
    OTPLoginScreen,
    Login,
    Permission,
    GenderMeet,
    SelectInerest,
    SelectPrompts,
    Map,
    PronounsData,
    IdentityMeet,
    Ethnicity,
    Setting,
    CheckInSelfiePage,
    CheckInSelfie: {
      screen: CheckInSelfie,
      initialParams: {
        selfie: '',
      },
    },
    CameraScreen,
    SuccessScreen,
    Match,
    MatchGenerate,
    CheckIn,
    CameraScreenPage
  },
  screenOptions: {
    headerShown: false,
  },
});

type SignedOutStackParamList = {
  Dashboard: undefined;
  Message: { userName: string };
  CheckInSelfie: { selfie: string };
  CameraScreen: undefined;
  SuccessScreen: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends SignedOutStackParamList { }
  }
}

export default SignedOutStack;