import React from 'react';
import { StatusBar } from 'react-native';
import { Host } from 'react-native-portalize';
import { RootSiblingParent } from 'react-native-root-siblings';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Routes from "./src/routes";
import { AuthProvider } from './src/contexts/Auth';
import theme from './src/global/styles/theme';

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
            <Routes />
          </AuthProvider>
        </Host>
      </RootSiblingParent>
    </GestureHandlerRootView>
  );
}

export default App;