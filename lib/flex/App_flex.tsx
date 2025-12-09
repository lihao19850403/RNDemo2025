import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  containerDefault: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerHorizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  viewOne: {
    width: 200,
    height: 200,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'red',
  },
  viewTwo: {
    width: 200,
    height: 200,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'yellow',
  },
  viewSmall: {
    width: 100,
    height: 50,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'grey',
  },
  wrap: {
    flexWrap: 'wrap',
  },
});

export default class FlexDemo extends Component {
  render() {
    return (
      <View>
        <View style={styles.containerDefault}>
          <Text style={styles.viewOne}>视图1</Text>
          <Text style={styles.viewTwo}>视图2</Text>
        </View>
        <View style={styles.containerHorizontal}>
          <Text style={styles.viewOne}>视图3</Text>
          <Text style={styles.viewTwo}>视图4</Text>
        </View>
        <View style={[styles.containerHorizontal, styles.wrap]}>
          <Text style={styles.viewSmall}>视图1</Text>
          <Text style={styles.viewSmall}>视图2</Text>
          <Text style={styles.viewSmall}>视图3</Text>
          <Text style={styles.viewSmall}>视图4</Text>
          <Text style={styles.viewSmall}>视图5</Text>
        </View>
      </View>
    );
  }
}
