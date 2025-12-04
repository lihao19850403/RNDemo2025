import { StyleSheet, Text, View } from 'react-native';

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
  return (
    <View style={containerStyles.container}>
      <Text style={textStyles.text}>Hello, world!</Text>
    </View>
  );
}
