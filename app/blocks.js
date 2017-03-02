import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

export default class Blocks extends Component {


  render() {
    return (
      <View style={styles.containerTop}>
      <View style={styles.containerTop} />
        <View style={styles.containerInsideMiddle}>
          <View style={styles.containerMiddleOne} />
          <View style={styles.containerMiddleTwo} />
        </View>
        <View style={styles.containerBottom} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  containerMiddleOne: {
    flex: 2,
    backgroundColor: 'skyblue',
  },
  containerMiddleTwo: {
    flex: 2,
    backgroundColor: 'red',
  },
  containerInsideMiddle: {
    flex: 2,
    flexDirection: 'row',
  },
  containerBottom: {
    flex: 3,
    backgroundColor: 'steelblue',
  },
});
