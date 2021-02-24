import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Alert } from 'react-native';

import Card from './card/Card';
import CardItem from './card/CardItem';
import MyButton from './MyButton';

import { API_BASE_URL } from '../constants';

export default class AlbumDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { album } = this.props;

    return (
      <Card>
        <CardItem>
          <View style={styles.cardItemTop}>
            <Image
              style={styles.cardImageTop}
              source={{
                uri: `${API_BASE_URL}/${album.image}`,
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{album.name}</Text>
            <Text>{album.artist}</Text>
          </View>
        </CardItem>
        <CardItem style={styles.cardItemCenter}>
          <Image
            style={styles.cardImageCenter}
            source={{ uri: `${API_BASE_URL}/${album.image}` }}
          />
        </CardItem>
        <CardItem>
          <MyButton
            onPress={() =>
              this.props.navigation.navigate('ModalScreen', {
                albumName: album.name,
                albumArtist: album.artist,
                albumTracks: album.links.tracks,
              })
            }>
            Ver Músicas
          </MyButton>
        </CardItem>
        <CardItem>
          <MyButton onPress={() => Alert.alert(`${album.id}`)}>
            Me Compre!
          </MyButton>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cardItemTop: {
    marginLeft: 10,
    marginRight: 10,
  },
  cardImageTop: {
    width: 50,
    height: 50,
  },
  textContainer: {
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardItemCenter: {
    justifyContent: 'center',
  },
  cardImageCenter: {
    width: 300,
    height: 300,
  },
});
