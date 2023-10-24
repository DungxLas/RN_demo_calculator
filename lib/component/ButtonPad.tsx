import {Pressable, StyleSheet, Text} from 'react-native';

const ButtonPad = ({item, onPress}: any) => {
  const onTap = () => {
    onPress(item);
  };

  let styleBtn = styles.item;
  if (item === 'AC' || item === '=') {
    styleBtn = styles.largeItem;
  }

  return (
    <Pressable
      style={({pressed}) => [pressed ? styles.itemPressed : null, styleBtn]}
      onPress={onTap}>
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
  largeItem: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    height: 60,
    width: 130,
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
