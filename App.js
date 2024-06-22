import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';
import ButtonCustom from './Components/ButtonCustom';
import { useState } from 'react';

export default function App() {

  const [display, setDisplay] = useState('')

  const handleClick = (value) => {

    if (value == 'C') {
      setDisplay('0')
    }

    else if (value == '=') {
      try {
        setDisplay(eval(display))
      } catch {
        setDisplay('???')
      }
    }

    else {
      if (display == '0') setDisplay(value)
      else setDisplay(display + value)
    }
  }

  return (
    <PaperProvider>
      <View style={styles.container}>

        <View style={styles.displayContainer}>
          <Text variant='displayLarge' style={styles.displayText}>{display}</Text>
        </View>

        <View style={styles.keyboardContainer}>
          <View style={styles.buttonsContainer}>

            <ButtonCustom title='7' Click={handleClick} />
            <ButtonCustom title='8' Click={handleClick} />
            <ButtonCustom title='9' Click={handleClick} />
            <ButtonCustom title='/' buttonColor='orange' Click={handleClick} />

          </View>

          <View style={styles.buttonsContainer}>

            <ButtonCustom title='4' Click={handleClick} />
            <ButtonCustom title='5' Click={handleClick} />
            <ButtonCustom title='6' Click={handleClick} />
            <ButtonCustom title='X' buttonColor='orange' Click={handleClick} />

          </View>


          <View style={styles.buttonsContainer}>

            <ButtonCustom title='1' Click={handleClick} />
            <ButtonCustom title='2' Click={handleClick}  />
            <ButtonCustom title='3' Click={handleClick} />
            <ButtonCustom title='-' buttonColor='orange' Click={handleClick} />

          </View>
          <View style={styles.buttonsContainer}>

            <ButtonCustom title='0' Click={handleClick} />
            <ButtonCustom title='C' Click={handleClick} buttonColor='#FF0000' />
            <ButtonCustom title='=' Click={handleClick} buttonColor='#4169E1'/>
            <ButtonCustom title='+' buttonColor='orange' Click={handleClick} />

          </View>
        </View>

      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  displayContainer: {
    height: '25%',
    margin: 12,
    flexDirection: 'row',
  },

  displayText: {
    flexGrow: 1,
    textAlignVertical: 'bottom',
    textAlign: 'right',
  },

  keyboardContainer: {
    flexGrow: 1,
  },

  buttonsContainer: {
    flexDirection: 'row',
  },

});
