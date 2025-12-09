import { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export class AppPageItemCell extends Component {
  constructor(props: any) {
    super(props);
    this.props = props;
  }

  props: { pageItem: any; navigation: any } = {
    pageItem: {},
    navigation: {},
  };

  styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
  });

  render() {
    return (
      <TouchableHighlight
        activeOpacity={0.85}
        underlayColor="#DDDDDD"
        onPress={() => {
          this.props.navigation.push(this.props.pageItem.pageName);
        }}
      >
        <View style={this.styles.container}>
          <Text>{this.props.pageItem.pageTitle}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
