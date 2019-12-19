import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import HeartContainer from './src/container/HeartContainer';
import { AntDesign } from '@expo/vector-icons';
import { globalStyles as styles } from './src/style/heart.style';

export default function App(): JSX.Element {

  const [counter, setCounter] = useState(0);

  function getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  const [hearts, setHearts] = useState([]);

  const incrementCounter = () => {
    setCounter(
      counter+1
    );
  }

  const addHeart = (): void => {
    setHearts([...hearts,
        { 
          id: counter,
          right: getRandomNumber(20, 150)
        }
      ]
    );
    incrementCounter();
  };

  const removeHeart = (id: number): void => {
    setHearts( heartArray => heartArray.filter( heart => heart.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>C'est pas ce que tu crois…</Text>
      <View style={styles.container}>
        {
          hearts.map( (x) => { return (<HeartContainer key={x.id} style={{ right: x.right }} onComplete={() => removeHeart(x.id)} />) })
        }
      </View>  
      <TouchableOpacity onPress={addHeart} style={styles.addButton}>
        <AntDesign name="plus" size={24} color={"#FFF"} />
      </TouchableOpacity>
    </View>
  );
}


