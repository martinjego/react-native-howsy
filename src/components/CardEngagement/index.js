import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const CardEngagment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.share}>
        <FontAwesome style={styles.replyIcon} name="reply"/>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statsItem}>
          <FontAwesome style={styles.statsIcon} name="eye"/>
          <Text>1000</Text>
        </View>
        <View style={styles.statsItem}>
          <FontAwesome style={styles.statsIcon} name="comment"/>
          <Text>1000</Text>
        </View>
        <View style={styles.statsItem}>
          <FontAwesome style={styles.statsIcon} name="heart"/>
          <Text>1000</Text>
        </View>
      </View>
    </View>
  )
}

export default CardEngagment;
