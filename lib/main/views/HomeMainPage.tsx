import { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { AppPageModel } from '../models/AppPageModel.tsx';
import { AppPageItemCell } from './AppPageItemCell.tsx';
import APP_PAGES from '../../Contents.tsx';

export default class HomeMainPage extends Component {
  constructor(props: any) {
    super(props);
    this.props = props;
  }

  props: { navigation: any } = {
    navigation: {},
  };

  state: { pagesList: AppPageModel[] } = {
    pagesList: [],
  };

  styles = StyleSheet.create({
    separator: {
      height: 1,
      width: '100%',
      backgroundColor: '#CED0CE',
    },
  });

  separator() {
    return <View style={this.styles.separator} />;
  }

  componentDidMount() {
    let pagesList = APP_PAGES.filter((page: AppPageModel) => {
      return page.pageName !== 'Main';
    });
    this.setState({
      pagesList: pagesList,
    });
  }

  render() {
    return (
      <FlatList
        data={this.state.pagesList}
        renderItem={({ item }) => (
          <AppPageItemCell pageItem={item} navigation={this.props.navigation} />
        )}
        keyExtractor={item => JSON.stringify(item)}
        ItemSeparatorComponent={() => this.separator()}
      />
    );
  }
}
