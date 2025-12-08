import { Component } from 'react';
import { StorageModel } from '../models/StorageModel.tsx';
import {
  Alert,
  Button,
  DeviceEventEmitter,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_REFRESH_EVENT } from '../App_storage.tsx';

export class StorageItemCell extends Component {
  constructor(props: any) {
    super(props);
    this.props = props;
  }

  props: { kvItem: StorageModel } = {
    kvItem: {},
  };

  state = {
    changedKey: '',
    changedValue: '',
  };

  styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      paddingLeft: 8,
      paddingRight: 8,
    },
    inputZone: {
      flex: 1,
      borderColor: 'grey',
      borderWidth: 1,
      marginRight: 8,
    },
    buttonSpace: {
      marginRight: 8,
    },
  });

  componentDidMount() {
    this.setState({
      changedKey: this.props.kvItem.key ?? '',
      changedValue: this.props.kvItem.value ?? '',
    });
  }

  modify = async () => {
    if (
      this.props.kvItem.key === this.state.changedKey &&
      this.props.kvItem.value === this.state.changedValue
    ) {
      Alert.alert('没有变化。');
      return;
    }
    if (this.state.changedKey.trim().length === 0) {
      Alert.alert('请输入有效的关键字。');
      return;
    }
    if (this.state.changedValue.trim().length === 0) {
      Alert.alert('请输入有效的值。');
      return;
    }
    await AsyncStorage.removeItem(this.props.kvItem.key!);
    await AsyncStorage.setItem(this.state.changedKey, this.state.changedValue);
    DeviceEventEmitter.emit(STORAGE_REFRESH_EVENT);
    Alert.alert('修改成功！');
  };

  remove = async () => {
    await AsyncStorage.removeItem(this.state.changedKey);
    DeviceEventEmitter.emit(STORAGE_REFRESH_EVENT);
  };

  render() {
    return (
      <View style={this.styles.container}>
        <TextInput
          style={this.styles.inputZone}
          placeholder="key"
          placeholderTextColor="grey"
          clearButtonMode="while-editing"
          value={this.state.changedKey}
          onChangeText={(value: string) => {
            this.setState({
              changedKey: value,
            });
          }}
        />
        <TextInput
          style={this.styles.inputZone}
          placeholder="value"
          placeholderTextColor="grey"
          clearButtonMode="while-editing"
          value={this.state.changedValue}
          onChangeText={(value: string) => {
            this.setState({
              changedValue: value,
            });
          }}
        />
        <Button title="修改" onPress={this.modify} />
        <View style={this.styles.buttonSpace} />
        <Button title="删除" onPress={this.remove} />
      </View>
    );
  }
}
