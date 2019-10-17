// components/HelloMobx.tsx
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HelloMobx: React.FC<Props> = (props) => {
  console.log('jhlim HelloMobx render')
  const onIncrement = () => props.setDebug(props.debug + 1);
  const onDecrement = () => props.setDebug(props.debug === 0 ? 0 : props.debug - 1);

  const getExclamationMarks = (numChars: number) => numChars > -1 && Array(numChars + 1).join('!');

  useEffect(() => console.log('jhlim HelloMobx effect'))
  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>
        Hello{' '}
        {'mobx' + getExclamationMarks(props.debug || 0)}
      </Text>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="-"
            onPress={onDecrement}
            accessibilityLabel="decrement"
            color="red"
          />
        </View>

        <View style={styles.button}>
          <Button
            title="+"
            onPress={onIncrement}
            accessibilityLabel="increment"
            color="blue"
          />
        </View>
      </View>
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
});


export interface Props {
  debug: number,
  setDebug: (value: number) => void,
}

export default HelloMobx
