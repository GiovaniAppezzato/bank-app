import React from 'react';
import { StatusBar } from 'react-native';
import { Host } from 'react-native-portalize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Routes from "./src/routes";
import { AuthProvider } from './src/contexts/Auth';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Host>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Host>
    </GestureHandlerRootView>
  );
}

export default App;