import { Alert, Button, NativeModules, StyleSheet, View } from 'react-native';

export default function AppNativeCall() {
  return (
    <View style={styles.container}>
      <Button
        title="调用原生方法"
        onPress={() => {
          try {
            let platformModule = NativeModules.PlatformModule;
            platformModule.showToast('原生气泡提示', 5000);
          } catch (error: any) {
            console.log(error);
          }
        }}
      />
      <Separator />
      <Button
        title="显示原生平台提供的常量"
        onPress={() => {
          try {
            let platformModule = NativeModules.PlatformModule;
            Alert.alert(platformModule.LONG + '\n' + platformModule.SHORT);
          } catch (error: any) {
            console.log(error);
          }
        }}
      />
      <Separator />
      <Button
        title="Callback回调"
        onPress={() => {
          try {
            let platformModule = NativeModules.PlatformModule;
            let successCallback = (result: string) => {
              Alert.alert(result);
            };
            let errorCallback = (error: any) => {
              Alert.alert(JSON.stringify(error));
            };
            platformModule.withCallback(
              'RN参数',
              successCallback,
              errorCallback,
            );
          } catch (error: any) {
            console.log(error);
          }
        }}
      />
      <Separator />
      <Button
        title="Promise回调"
        onPress={() => {
          try {
            let platformModule = NativeModules.PlatformModule;
            platformModule
              .withPromise('RN参数')
              .then((result: string) => {
                Alert.alert(result);
              })
              .catch((error: any) => {
                if (error.code) {
                  Alert.alert(error.code);
                } else {
                  console.log(error);
                }
              });
          } catch (error: any) {
            console.log(error);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    marginTop: 8,
  },
});

function Separator() {
  return <View style={styles.separator} />;
}
