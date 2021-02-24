import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../Header';
import AlbumList from '../AlbumList';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Header title="Albums App" />
        <AlbumList {...this.props} />
      </View>
    );
  }
}
