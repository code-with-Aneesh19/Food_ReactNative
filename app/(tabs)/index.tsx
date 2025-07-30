import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from '../../navigation';


const index = () => {
  return (
    <GestureHandlerRootView >
    <Navigation/>
    </GestureHandlerRootView>
  )
}

export default index

const styles = StyleSheet.create({})