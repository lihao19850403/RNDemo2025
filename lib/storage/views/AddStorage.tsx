import React, { Component } from 'react';
import {
  Alert,
  DeviceEventEmitter,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// 需要执行npm install @react-native-async-storage/async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_REFRESH_EVENT } from '../App_storage.tsx';
import { StorageViewModel } from '../viewmodels/StorageViewModel.tsx';

export class AddStorage extends Component {
  styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      padding: 8,
    },
    inputZone: {
      flex: 1,
      borderColor: 'grey',
      borderWidth: 1,
      marginRight: 8,
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4492EF',
      padding: 8,
      borderRadius: 2,
    },
    buttonText: {
      color: 'white',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
  });

  viewModel: StorageViewModel = new StorageViewModel();
  key: string = '';
  value: string = '';

  addStorage = async () => {
    const isKeyValid: boolean = await this.viewModel.isKeyValid(this.key);
    if (isKeyValid) {
      if (this.value.trim().length === 0) {
        Alert.alert('请输入有效的值。');
        return;
      }
      await AsyncStorage.setItem(this.key, this.value);
      DeviceEventEmitter.emit(STORAGE_REFRESH_EVENT);
    }
  };

  render() {
    return (
      <View style={this.styles.container}>
        <TextInput
          style={this.styles.inputZone}
          placeholder="key"
          placeholderTextColor="grey"
          clearButtonMode="while-editing"
          onChangeText={(value: string) => {
            this.key = value;
          }}
        />
        <TextInput
          style={this.styles.inputZone}
          placeholder="value"
          placeholderTextColor="grey"
          clearButtonMode="while-editing"
          onChangeText={(value: string) => {
            this.value = value;
          }}
        />
        <TouchableOpacity onPress={this.addStorage} style={this.styles.button}>
          <Text style={this.styles.buttonText}>添加</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
