import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});

export default class AppCounter extends Component {
  state = {
    count: 0,
  };

  private onPressed = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPressed}>
          <Text>Click Me</Text>
        </TouchableOpacity>
        <View>
          <Text>You clicked {this.state.count} time.</Text>
        </View>
      </View>
    );
  }
}
