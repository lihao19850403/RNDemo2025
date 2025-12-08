import { Component } from 'react';
import { NewsItem } from '../models/NewsItem.tsx';
import { Image, StyleSheet, Text, View } from 'react-native';

export class NewsItemCell extends Component {
  constructor(props: any) {
    super(props);
    this.props = props;
  }

  props: { newsItem: NewsItem } = {
    newsItem: {},
  };

  styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentSheet: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    contentItem: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginTop: 4,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      color: 'black',
    },
    tip: {
      fontWeight: 'normal',
      fontSize: 14,
      color: 'grey',
    },
    content: {
      flex: 1,
      fontWeight: 'normal',
      fontSize: 14,
      color: 'black',
    },
  });

  contentItem(tip?: string, content?: string) {
    return (
      <View style={this.styles.contentItem}>
        <Text style={this.styles.tip}>{tip}</Text>
        <Text style={this.styles.content}>{content}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={this.styles.container}>
        <Image
          source={{ uri: this.props.newsItem.picUrl }}
          resizeMode={'contain'}
          width={120}
          height={90}
        />
        <View style={this.styles.contentSheet}>
          <Text style={this.styles.title}>{this.props.newsItem?.title}</Text>
          {this.contentItem('发布时间:', this.props.newsItem?.ctime)}
          {this.contentItem('来源:', this.props.newsItem?.source)}
          {this.contentItem('摘要:', this.props.newsItem?.description)}
          {this.contentItem('原文链接:', this.props.newsItem?.url)}
        </View>
      </View>
    );
  }
}