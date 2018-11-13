import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Translator extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Translate messages</Text>
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
