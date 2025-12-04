import { Component } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

const ChildName = (props: any) => {
  return <Text>{props.name}</Text>;
};

const ChildTel = (props: any) => {
  return <Text {...props}>{props.childTel}</Text>;
};

class Child extends Component {
  props = {
    childName: '',
    childTel: '',
    childAge: 0,
    onPress: () => {},
  };

  state = {
    showText: true,
  };

  constructor(props: any) {
    super(props);
    this.props = props;

    setInterval(() => {
      this.setState({
        showText: !this.state.showText,
      });
    }, 1000);
  }

  render() {
    if (this.state.showText) {
      return (
        <View>
          <ChildName name={this.props.childName} />
          <ChildTel {...this.props} />
        </View>
      );
    } else {
      return null;
    }
  }
}

export default class AppPropState extends Component {
  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  telClick = () => {
    Alert.alert(`所有属性：${JSON.stringify(this.props)}`);
  };

  render() {
    return (
      <View style={this.styles.container}>
        <Child
          childName="Li Hao"
          childTel="138****7746"
          childAge={40}
          onPress={this.telClick}
        />
      </View>
    );
  }
}
