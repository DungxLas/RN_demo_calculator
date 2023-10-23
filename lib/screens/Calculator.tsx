import {useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import ButtonPad from '../component/ButtonPad';

const Calculator = () => {
  const [input, setInput] = useState('');

  const buttons = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '0',
    '.',
    '=',
    '+',
  ];

  const renderItem = ({item}: any) => <ButtonPad item={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.input}>{input}</Text>
      <View style={styles.buttonContainer}>
        <FlatList
          data={buttons}
          renderItem={renderItem}
          //keyExtractor={item => item}
          numColumns={4}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    margin: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 24,
    textAlign: 'right',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
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

export default Calculator;
