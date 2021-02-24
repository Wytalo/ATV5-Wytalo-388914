import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from './src/Routes';

export default () => {
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
};
