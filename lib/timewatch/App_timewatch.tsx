import { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class AppTimeWatch extends Component {
  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  state = {
    startTime: 0,
    secondsPassed: 0,
    intervalRef: 0,
  };



  start = () => {
    this.setState({
      startTime: Date.now(),
    });
    this.countDownTimes();
  };

  pause = () => {
    clearInterval(this.state.intervalRef);
    this.setState({
      intervalRef: 0,
    });
  };

  goon = () => {
    this.setState({
      startTime: Date.now() - this.state.secondsPassed,
    });
    this.countDownTimes();
  };

  finished = () => {
    clearInterval(this.state.intervalRef);
    this.setState({
      startTime: 0,
      secondsPassed: 0,
      intervalRef: 0,
    });
  };

  private countDownTimes = () => {
    let intervalRef = setInterval(() => {
      let newTime: number = Date.now();
      this.setState({
        secondsPassed: newTime - this.state.startTime,
      });
    }, 10);
    this.setState({
      intervalRef: intervalRef,
    });
  };

  render() {
    return (
      <View style={this.styles.container}>
        <Text>时间过去了：{(this.state.secondsPassed / 1000).toFixed(3)}</Text>
        <Button
          title={
            this.state.startTime === 0
              ? '开始'
              : this.state.intervalRef > 0
              ? '暂停'
              : '继续'
          }
          onPress={
            this.state.startTime === 0
              ? this.start
              : this.state.intervalRef > 0
              ? this.pause
              : this.goon
          }
        />
        {this.state.startTime > 0 && this.state.intervalRef === 0 ? (
          <Button title="归零" onPress={this.finished} />
        ) : null}
      </View>
    );
  }
}
