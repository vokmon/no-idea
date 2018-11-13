import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Restaurant extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Randomly pick a restaurant for you</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
