import React from 'react';
import { StatusBar } from 'react-native';
import { Host } from 'react-native-portalize';
import { RootSiblingParent } from 'react-native-root-siblings';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import theme from './src/global/styles/theme';
import Routes from "./src/routes";
import { AuthProvider } from './src/contexts/Auth';
import { AccountProvider } from './src/contexts/Account';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RootSiblingParent>
        <StatusBar 
          barStyle="light-content" 
          backgroundColor={theme.colors.PRIMARY} 
        />
        <Host>
          <AuthProvider>
            <AccountProvider>
              <Routes />
            </AccountProvider>
          </AuthProvider>
        </Host>
      </RootSiblingParent>
    </GestureHandlerRootView>
  );
}

export default App;