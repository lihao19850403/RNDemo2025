import { Component } from 'react';
import {
  Button,
  DeviceEventEmitter,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class ComponentA extends Component {
  state = {
    message: '组件A',
  };

  componentDidMount() {
    DeviceEventEmitter.addListener('messageChangedEvent', (newInfo: string) => {
      this.setState({
        message: newInfo,
      });
    });
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners('messageChangedEvent');
  }

  render() {
    return <Text>{this.state.message}</Text>;
  }
}

export default class AppEvent extends Component {
  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  private handleClick = (newInfo: string) => {
    DeviceEventEmitter.emit('messageChangedEvent', newInfo);
  };

  render() {
    return (
      <View style={this.styles.container}>
        <ComponentA />
        <Button
          title="发送新信息"
          onPress={() => {
            this.handleClick('new Compoennt');
          }}
        />
      </View>
    );
  }
}
