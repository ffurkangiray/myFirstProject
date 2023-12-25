import React from 'react';
import{View, Text, SafeAreaView,Button, TouchableOpacity, StyleSheet} from 'react-native';
import {defaults} from './components/Card';
import Card from './components/Card/Card';

function App() {
  return (
    <View>
      <Card title="Eddard Stark" text="Winter is coming.."/>
      <Card title="Arif Işık" text="Uzaylılar tarafından kaçırıldım. Evet tarafından."/>
      <Card text="ilhami abi sen söyle, ben başka bir ilde miyim?" title="Serbest Mermer"/>
      <Card text="ilhami abi sen söyle, ben başka bir ilde miyim?" title="Serbest Mermer"/>
    </View>
  )
}

export default App;
