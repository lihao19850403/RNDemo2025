import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageModel } from '../models/StorageModel.tsx';

export class StorageViewModel {
  isKeyValid(key: string): Promise<boolean> {
    return new Promise(resolve => {
      if (key.trim().length === 0) {
        Alert.alert('请输入有效的关键字。');
        resolve(false);
        return;
      }
      AsyncStorage.getAllKeys().then((allKeys: readonly string[]) => {
        if (allKeys.includes(key)) {
          Alert.alert('已存在同名关键字。');
          resolve(false);
          return;
        }
        resolve(true);
      });
    });
  }

  getAllKVs(): Promise<StorageModel[]> {
    let result: StorageModel[] = [];
    return new Promise(async resolve => {
      const allKeys: readonly string[] = await AsyncStorage.getAllKeys();
      for (let key of allKeys) {
        const value: string | null = await AsyncStorage.getItem(key);
        if (
          key !== undefined &&
          key !== null &&
          value !== undefined &&
          value !== null
        ) {
          result.push({ key: key, value: value });
        }
      }
      resolve(result);
    });
  }
}
