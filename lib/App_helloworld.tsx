import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const textStyles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default function HelloWorldApp() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={containerStyles.container}>
        <Text style={textStyles.text}>Hello, world!</Text>
      </View>
    </SafeAreaProvider>
  );
}
