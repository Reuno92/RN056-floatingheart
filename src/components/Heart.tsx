import React  from 'react';
import {View } from 'react-native';
import { globalStyles as styles} from './../style/heart.style';
import { AntDesign } from '@expo/vector-icons';

const Heart = (props: any): JSX.Element => (
    <View {...props} style={[styles.heart, props.style]}>
      <AntDesign name="heart" size={40} color={props.color} />
    </View>
);

export default Heart;