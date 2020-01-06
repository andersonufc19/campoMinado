import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Field from './src/components/Field'
import Flag from './src/components/Flag'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello word!</Text>
      <Field/>
      <Field opened />
      <Field opened nearMines={1}/>
      <Field mined />
      <Field mined opened/>
      <Field mined opened exploded />
      <Field flagged/>
      <Field flagged opened/> */}
      {/* <Flag /> */}
      <Flag big/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
