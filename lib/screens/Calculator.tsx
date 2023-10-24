import {useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import ButtonPad from '../component/ButtonPad';

const Calculator = () => {
  const [input, setInput] = useState('ERR');

  const buttons = [
    'AC',
    'C',
    '/',
    '',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  const handler = (nut: any) => {
    if (input === 'ERR') {
      setInput('');
    }
    if (nut === '=') {
      let result;
      try {
        result = eval(input);
      } catch (error) {
        setInput('ERR');
        return;
      }
      setInput(result);
      return;
    } else if (nut === 'AC') {
      setInput('');
    } else if (nut === 'C') {
      setInput(prev => prev.slice(0, -1));
    } else {
      setInput(prev => prev + nut);
    }
  };

  const renderItem = ({item}: any) =>
    item === '' ? null : <ButtonPad item={item} onPress={handler} />;

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
});

export default Calculator;
