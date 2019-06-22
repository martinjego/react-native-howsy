import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, View, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import CardImage from '../CardImage';
import CardEngagement from '../CardEngagement';
import styles from './styles';

const { height, width } = Dimensions.get('window');

const CardModal = (props) => {
  const {
    item: { url, thumbnailUrl, title }, item,
    isVisibleModal, toggleModal
  } = props;
  return (
    <Modal isVisible={isVisibleModal}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButtonStyle} onPress={() => toggleModal()}>
          <FontAwesome name="close" size={20}/>
        </TouchableOpacity>
        <View style={styles.boxContainer}>
          <CardImage resizeMode="contain" image={url}/>
          <CardEngagement />
        </View>
        <View style={styles.userContainer}>
          <Image style={styles.imageContainer} source={{ uri: thumbnailUrl}} />
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </View>
    </Modal>
  )
}

export default CardModal;
