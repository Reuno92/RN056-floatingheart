import React, { useState, useEffect, useRef } from 'react';
import { Animated, Easing, Dimensions } from 'react-native';
import Heart from '../components/Heart';
import { globalStyles as styles } from '../style/heart.style';

const { height } = Dimensions.get("window");
let animationEndY = Math.ceil(height * .7);
const negativeEndY = animationEndY * -1

const HeartContainer = (props: any): JSX.Element => {

    const movement = useRef(new Animated.Value(0)).current;
    const opacity = useRef(new Animated.Value(1)).current;
    const scale = useRef(new Animated.Value(0.5)).current;
  
    const { onComplete } = props;
  
    useEffect( () => {
      Animated.timing(movement, {
        duration: 2000,
        toValue: negativeEndY,
        easing: Easing.ease,
        useNativeDriver: true
      }).start(props.onComplete);
  
      Animated.timing(opacity, {
        duration: 2000,
        toValue: 0,
        easing: Easing.ease,
        useNativeDriver: true
      }).start(props.onComplete);
  
      Animated.timing(scale, {
        duration: 500,
        toValue: 1.4,
        easing: Easing.ease,
        useNativeDriver: true
      }).start()
  
    }, []);
    
    return (
      <Animated.View style={[styles.heartContainer, { 
          transform:[{ 
            translateY: movement
          },
          {
            scale: scale
          }
        ], 
          opacity: opacity,
        },
        props.style]}>
        <Heart color="purple" />
      </Animated.View>
  )};

  export default HeartContainer;