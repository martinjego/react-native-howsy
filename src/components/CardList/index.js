import React, {Component} from 'react';
import { Text, View, ScrollView } from 'react-native';

import styles from './styles';
import Card from '../Card';

class CardList extends Component<Props> {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      cards: [],
      isVisibleModal: false,
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(cards => this.setState({ cards }))
      .catch(error => console.log(error))
  }
  toggleModalHandler() {
    this.setState({ isVisibleModal: !this.state.isVisibleModal })
  }
  render() {
    const { cards } = this.state;
    const threeCards = cards.slice(0, 10);
    return (
      <ScrollView>
        <View style={styles.container}>
          { threeCards.map((card) => {
            return (
              <Card
                key={card.id}
                item={card}
                toggleModal={() => this.toggleModalHandler()}
                isVisibleModal={this.state.isVisibleModal}
              />
            )
          })}
        </View>
      </ScrollView>
    );
  }
}

export default CardList;
