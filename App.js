import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopHead from './components/TopHead'
import ProfileBody from './components/ProfileBody'
import StandBody from './components/StandBody'

export default class App extends React.Component {
  render() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <TopHead/>
            </View>
            <View style={{ flex: 10 }}>
                <StandBody/>
            </View>
        </View>
    );
  }
}
