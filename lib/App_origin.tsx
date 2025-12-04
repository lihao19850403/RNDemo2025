/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StyleSheet, View } from 'react-native';

export default function AppOrigin() {
  return <AppContent />;
}

function AppContent() {
  return (
    <View style={styles.container}>
      <NewAppScreen templateFileName="App.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
