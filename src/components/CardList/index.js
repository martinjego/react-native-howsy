import React, {Component} from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import Card from '../Card';

class CardList extends Component<Props> {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      cards: [],
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(cards => this.setState({ cards }))
      .catch(error => console.log(error))
  }
  render() {
    const { cards } = this.state;
    const threeCards = cards.slice(0, 3);
    return (
      <View style={styles.container}>
        { threeCards.map((card) => {
          return <Card key={card.id} item={card}/>
        })}
      </View>
    );
  }
}

export default CardList;
