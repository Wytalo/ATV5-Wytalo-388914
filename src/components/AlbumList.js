import React, { Component } from 'react';
import { FlatList } from 'react-native';

import AlbumDetail from './AlbumDetail';

import { API_BASE_URL } from '../constants';

export default class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  componentDidMount() {
    return fetch(`${API_BASE_URL}/api/albums.json`)
      .then((response) => response.json())
      .then((responseJson) => this.setState({ albums: responseJson.albums }));
  }

  render() {
    return (
      <FlatList
        data={this.state.albums}
        renderItem={({ item }) => <AlbumDetail album={item} {...this.props} />}
        keyExtractor={(index, item) => index + item}
      />
    );
  }
}
