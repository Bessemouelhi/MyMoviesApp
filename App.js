import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/Search'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!!!</Text>
        <Search />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
});
