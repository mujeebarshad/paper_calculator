import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function HeaderView({ title }) {
  return (
    <View style={styles.headerContainer}>
      <AppText>{title}</AppText>
      <MaterialCommunityIcons name="menu" color={colors.black} size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
})

export default HeaderView;