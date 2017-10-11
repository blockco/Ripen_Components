import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopHead from './components/TopHead'
import ProfileBody from './components/ProfileBody'

export default class App extends React.Component {
  render() {
    return (
        <View style={{ flex: 1 }}>
            <TopHead/>
            <ProfileBody/>
        </View>
    );
  }
}
