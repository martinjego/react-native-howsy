import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, View, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import CardModal from '../CardModal';

import CardImage from '../CardImage';
import CardEngagement from '../CardEngagement';

const { height, width } = Dimensions.get('window');

class Card extends Component {
  constructor() {
    super();
    this.state = {
      isVisibleModal: false,
    }
  }
  toggleModal() {
    this.setState({isVisibleModal: !this.state.isVisibleModal})
  }
  render() {
    const {
      item: { url, thumbnailUrl, title }, item,
    } = this.props;
    return (
      <TouchableOpacity
        onPress={() => this.toggleModal()}
        style={styles.container}>
        <CardModal
          toggleModal={() => this.toggleModal()}
          item={item}
          isVisibleModal={this.state.isVisibleModal}/>
        <View style={styles.boxContainer}>
          <CardImage resizeMode="cover"image={url}/>
          <CardEngagement />
        </View>
        <View style={styles.userContainer}>
          <Image style={styles.imageContainer} source={{ uri: thumbnailUrl}} />
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Card
