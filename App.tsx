import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/features/store'
import { PaperProvider } from 'react-native-paper';
import { paperTheme } from './src/constants/theme';
import { StatusBar } from 'expo-status-bar';
// import RootNavigation from './src/navigation/RootNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


function App(): JSX.Element {
  const [loaded, error] = useFonts({
    'Inter-Black': require('./assets/fonts/SF-Pro-Display-Regular.ttf'),
  });

  async function DashboardUserData() {
    await SplashScreen.preventAutoHideAsync();
  }

  useEffect(() => {
    if (loaded || error) {
      DashboardUserData()
    } else {
      DashboardUserData()
    }
  }, [loaded, error]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={paperTheme}>
        <StatusBar style="light" />
        <Provider store={configureStore}>
          {/* <RootNavigation /> */}
          <FlashMessage />
        </Provider>
      </PaperProvider>
      <FlashMessage position="top" />
    </GestureHandlerRootView>
  );
}

export default App;
