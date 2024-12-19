import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignedOutStack from './SignedOutStack';
// import { useIsSignedIn, useIsSignedOut } from '../hooks/useAuth';

const RootStack = createNativeStackNavigator({
  screens: {
    // LoggedIn: {
    //   if: useIsSignedIn,
    //   screen: Fragment,
    //   options: {
    //     headerShown: false,
    //   },
    // },
    LoggedOut: {
      // if: useIsSignedOut,
      screen: SignedOutStack,
      options: {
        headerShown: false,
        animation: 'none',
      },
    },
  },
});

const RootNavigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default RootNavigation;
