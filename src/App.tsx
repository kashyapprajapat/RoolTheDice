/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Diceone from '../assets/1dice.jpg';
import Dicetwo from '../assets/2dice.jpg';
import Dicethree from '../assets/3dice.jpg';
import Dicefour from '../assets/4dice.jpg';
import Dicefive from '../assets/5dice.jpg';
import Dicesix from '../assets/6dice.jpg';
import DiceHand from '../assets/handdice.png';

type DiceProps = PropsWithChildren<{
  imageurl: ImageSourcePropType
}>

const Dice = ({ imageurl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageurl} />
    </View>
  )
}
function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(Diceone)

  const rollDiceonTap = () => {
    let randumnum = Math.floor(Math.random() * 6) + 1;
    switch (randumnum) {
      case 1:
        setDiceImage(Diceone)
        break;
      case 2:
        setDiceImage(Dicetwo)
        break;
      case 3:
        setDiceImage(Dicethree)
        break;
      case 4:
        setDiceImage(Dicefour)
        break;
      case 5:
        setDiceImage(Dicefive)
        break;
      case 6:
        setDiceImage(Dicesix)
        break;
      default:
        setDiceImage(Diceone)
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Image source={DiceHand} />
      <Dice imageurl={diceImage} />
      <Pressable onPress={rollDiceonTap}>
        <Text style={styles.rollDiceBtnText}>Roll the dice 🎲</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 150,
    height: 150,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
