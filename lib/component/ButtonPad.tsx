import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const ButtonPad = ({item}: any) => {
  return (
    <Pressable
      style={({pressed}) => [pressed ? styles.itemPressed : null, styles.item]}
      onPress={() => {}}>
      <Text style={styles.textButton}>{item}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  itemPressed: {
    opacity: 0.8,
  },
  textButton: {
    color: 'white',
    fontSize: 24,
  },
});

export default ButtonPad;
