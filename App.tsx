import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
/* ---------- Pages: ---------- */
import AppOrigin from './lib/App_origin.tsx';
import HelloWorldApp from './lib/App_helloworld.tsx';
import AppCounter from './lib/App_counter.tsx';
import FlexDemo from './lib/App_flex.tsx';
import AppPropState from './lib/APP_propstate.tsx';
import AppTimeWatch from './lib/App_timewatch.tsx';
import AppEvent from './lib/App_event.tsx';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
  });
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent={true}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View style={styles.container}>
        <AppEvent />
      </View>
    </SafeAreaProvider>
  );
}
