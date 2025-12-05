import { Component, useEffect, useReducer, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

/* ---------- Hook ---------- */

function OriginalHook() {
  const [count, update] = useState(0);

  useEffect(() => {
    console.log('[]只执行一次，初始化');
    return () => {
      console.log('[]只执行一次，收尾');
    };
  }, []);

  return (
    <View>
      <Text>你已经点击了 {count} 次</Text>
      <Button title="单击" onPress={() => update(count + 1)} />
    </View>
  );
}

/* ---------- Reducer ---------- */

function reducerDispatcher(state: any, action: any) {
  switch (action.what) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
}

function OriginalReducer() {
  const [state, dispatch] = useReducer(reducerDispatcher, { count: 0 });

  return (
    <View>
      <Button title="增加" onPress={() => dispatch({ what: 'increment' })} />
      <Text>当前值：{state.count}</Text>
      <Button title="减少" onPress={() => dispatch({ what: 'decrement' })} />
    </View>
  );
}

/* ---------- Custom Hook ---------- */

function useAxios(url: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then(res => {
        setIsLoading(false);
        setResponse(res.data);
      })
      .catch(e => {
        setIsLoading(false);
        setError(e);
      });
  }, [url]);
  return [isLoading, responseData, error];
}

function CustomHook() {
  let url = 'https://www.baidu.com';
  const [isLoading, responseData, error] = useAxios(url);

  if (isLoading) {
    return <Text>加载中...</Text>;
  }
  if (error) {
    return <Text>出错：{error}</Text>;
  }
  return <Text>{responseData}</Text>;
}

/* ---------- Demo ---------- */

export default class AppHookApi extends Component {
  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  render() {
    return (
      <ScrollView>
        <View style={this.styles.container}>
          <OriginalHook />
          <OriginalReducer />
          <CustomHook />
        </View>
      </ScrollView>
    );
  }
}
