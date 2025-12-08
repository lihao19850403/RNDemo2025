import { Component } from 'react';
import { DeviceEventEmitter, FlatList, StyleSheet, View } from 'react-native';
import { AddStorage } from './views/AddStorage.tsx';
import { StorageModel } from './models/StorageModel.tsx';
import { StorageViewModel } from './viewmodels/StorageViewModel.tsx';
import { StorageItemCell } from './views/StorageItemCell.tsx';

export const STORAGE_REFRESH_EVENT: string = 'storageRefreshEvent';

export default class AppStorage extends Component {
  state: { kvs: StorageModel[] } = {
    kvs: [],
  };

  styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerSpace: {
      marginTop: 8,
    },
    separator: {
      height: 1,
      width: '100%',
      backgroundColor: '#CED0CE',
      marginTop: 16,
      marginBottom: 16,
    },
  });

  viewModel: StorageViewModel = new StorageViewModel();

  separator() {
    return <View style={this.styles.separator} />;
  }

  componentDidMount() {
    this.viewModel.getAllKVs().then((result: StorageModel[]) => {
      this.setState({
        kvs: result,
      });
    });
    DeviceEventEmitter.addListener(STORAGE_REFRESH_EVENT, () => {
      this.viewModel.getAllKVs().then((result: StorageModel[]) => {
        this.setState({
          kvs: result,
        });
      });
    });
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners(STORAGE_REFRESH_EVENT);
  }

  render() {
    return (
      <View style={this.styles.container}>
        <AddStorage />
        <FlatList
          style={this.styles.headerSpace}
          data={this.state.kvs}
          renderItem={({ item }) => <StorageItemCell kvItem={item} />}
          keyExtractor={item => JSON.stringify(item)}
          ItemSeparatorComponent={() => this.separator()}
        />
      </View>
    );
  }
}
