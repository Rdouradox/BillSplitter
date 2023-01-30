import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';

import { Groups } from './src/screens/Groups';
import { NewGroup } from './src/screens/NewGroup';
import { Players } from './src/screens/Players';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
      <Groups/>
      </>
    </ThemeProvider>
  );
}