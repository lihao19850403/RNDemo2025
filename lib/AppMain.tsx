import { Component } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AppPageModel } from './main/models/AppPageModel.tsx';
import APP_PAGES from './Contents.tsx';
import {
  Appearance,
  AppState,
  AppStateStatus,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import getColorScheme = Appearance.getColorScheme;
import HomeMainPageWrapper from './main/views/HomeMainPageWrapper.tsx';

const Stack = createStackNavigator();

export default class AppMain extends Component {
  isDarkMode: boolean = false;

  state = {
    appState: 'active',
  };

  styles = StyleSheet.create({
    fullContent: {
      flex: 1,
    },
    bottomInfo: {
      width: '100%',
      textAlign: 'center',
      borderTopColor: 'grey',
      borderTopWidth: 1,
      backgroundColor: 'gray',
    },
  });

  componentDidMount() {
    this.isDarkMode = getColorScheme() === 'dark';
    AppState.addEventListener('change', this.appStateChanged);
  }

  componentWillUnmount() {}

  appStateChanged(newAppState: AppStateStatus) {
    if (!this.setState) {
      console.log('App state changed, but this point is empty');
    } else {
      this.setState({
        appsState: newAppState,
      });
    }
  }

  render() {
    return (
      <View style={this.styles.fullContent}>
        <StatusBar
          translucent={true}
          barStyle={this.isDarkMode ? 'light-content' : 'dark-content'}
        />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
              name="Main"
              options={{
                title: 'RNDemo2025',
                headerTitleAlign: 'center',
              }}
            >
              {() => HomeMainPageWrapper(APP_PAGES)}
            </Stack.Screen>
            {APP_PAGES.map((pageInfo: AppPageModel) => (
              <Stack.Screen
                name={pageInfo.pageName}
                component={pageInfo.pageContent}
                options={{
                  title: pageInfo.pageTitle,
                  headerTitleAlign: 'center',
                }}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
        <Text style={this.styles.bottomInfo}>
          当前状态为：{this.state.appState}
        </Text>
      </View>
    );
  }
}
