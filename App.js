import React, {Component} from 'react';
import {
  StyleSheet, Text, View, SafeAreaView
} from 'react-native';
import CardList from './src/components/CardList';

export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <CardList />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },
});
