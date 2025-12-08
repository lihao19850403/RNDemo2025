import { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { NewsItem } from './models/NewsItem.tsx';
import { NewsItemCell } from './views/NewsItemCell.tsx';
import { NewsListViewModel } from './viewmodels/NewsListViewModel.tsx';

export default class AppFlatList extends Component {
  state: { newsList: NewsItem[] } = {
    newsList: [],
  };

  styles = StyleSheet.create({
    separator: {
      height: 1,
      width: '100%',
      backgroundColor: '#CED0CE',
      marginTop: 16,
      marginBottom: 16,
    },
  });

  viewModel: NewsListViewModel = new NewsListViewModel();

  separator() {
    return <View style={this.styles.separator} />;
  }

  componentDidMount() {
    this.viewModel.getNewsList().then((newsList: NewsItem[]) => {
      this.setState({
        newsList: newsList,
      });
    });
  }

  render() {
    return (
      <FlatList
        data={this.state.newsList}
        renderItem={({ item }) => <NewsItemCell newsItem={item} />}
        keyExtractor={item => item.id ?? JSON.stringify(item)}
        ItemSeparatorComponent={() => this.separator()}
      />
    );
  }
}
