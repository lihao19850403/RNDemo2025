import {
  Appearance,
  AppState,
  AppStateStatus,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Component } from 'react';
import getColorScheme = Appearance.getColorScheme;
/* ---------- Pages: ---------- */
import AppOrigin from './lib/App_origin.tsx';
import HelloWorldApp from './lib/App_helloworld.tsx';
import AppCounter from './lib/App_counter.tsx';
import FlexDemo from './lib/App_flex.tsx';
import AppPropState from './lib/APP_propstate.tsx';
import AppTimeWatch from './lib/App_timewatch.tsx';
import AppEvent from './lib/App_event.tsx';
import AppHookApi from './lib/APP_hookapi.tsx';
import AppFlatList from './lib/flatlist/App_flatlist.tsx';
import AppStorage from './lib/storage/App_storage.tsx';

export default class App extends Component {
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
      <SafeAreaProvider>
        <SafeAreaView style={this.styles.fullContent}>
          <StatusBar
            translucent={true}
            barStyle={this.isDarkMode ? 'light-content' : 'dark-content'}
          />
          <View style={this.styles.fullContent}>
            <AppStorage />
          </View>
          <Text style={this.styles.bottomInfo}>
            当前状态为：{this.state.appState}
          </Text>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}
