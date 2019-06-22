import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const CardImage = (props) => {
  const { image, resizeMode } = props;
  return (
    <Image
      source={{uri: image}}
      style={styles.cardImage}
      resizeMode={resizeMode}
    />
  )
}

export default CardImage;
