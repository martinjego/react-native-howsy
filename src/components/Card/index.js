import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import styles from './styles';

import CardImage from '../CardImage';
import CardEngagement from '../CardEngagement';

const Card = (props) => {
  const { item: { url, thumbnailUrl, title }, item } = props;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.boxContainer}>
        <CardImage image={url}/>
        <CardEngagement />
      </View>
      <View style={styles.userContainer}>
        <Image style={styles.imageContainer} source={{ uri: thumbnailUrl}} />
        <Text style={styles.titleStyle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Card
