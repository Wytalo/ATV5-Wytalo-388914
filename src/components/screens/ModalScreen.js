import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import MyButton from '../MyButton';
import Card from '../card/Card';
import CardItem from '../card/CardItem';

import { API_BASE_URL } from '../../constants';

export default class ModalScreen extends Component {
  constructor(props) {
    super(props);
    const { albumTracks, albumName, albumArtist } = this.props.route.params;

    this.state = {
      tracks: [],
      loading: true,
      albumTracks,
      albumName,
      albumArtist,
    };
  }

  componentDidMount() {
    fetch(`${API_BASE_URL}/${this.state.albumTracks}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        this.setState({ tracks: responseJson.tracks, loading: false });
      });
  }

  renderTracks() {
    if (this.state.loading === true) {
      return (
        <View style={styles.loaddingContainer}>
          <ActivityIndicator size="large" color="#0000FF" />
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <FlatList
        data={this.state.tracks}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Text style={styles.listName}>
                {`${(index + 1)
                  .toString()
                  .padStart(2, '0')} - ${`${item.title} - ${item.duration}`}`}
              </Text>
            </View>
          );
        }}
        keyExtractor={(index, item) => {
          return index + item;
        }}
      />
    );
  }

  render() {
    return (
      <Card>
        <CardItem style={styles.cardItem}>
          <Text style={styles.cardText}>
            {'.::' + this.state.albumName + '::.'}
          </Text>
          <Text>Lista das Músicas - {this.state.albumArtist}</Text>
        </CardItem>
        <CardItem>{this.renderTracks()}</CardItem>
        <CardItem>
          <MyButton onPress={() => this.props.navigation.goBack()}>
            Voltar
          </MyButton>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cardItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loaddingContainer: {
    flex: 1,
    alignItems: 'center',
  },
  listName: {
    fontSize: 16.5,
  },
});
