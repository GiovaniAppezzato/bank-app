import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Routes from "./src/routes";

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <Host> */}
        <Routes />
      {/* </Host> */}
    </GestureHandlerRootView>
  );
}

export default App;