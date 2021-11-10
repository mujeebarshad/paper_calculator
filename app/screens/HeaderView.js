import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function HeaderView() { // can be used as component
  return (
    <View style={styles.headerContainer}>
      <AppText>Paper Calculator</AppText>
      <MaterialCommunityIcons name="menu" color={colors.black} size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    paddingBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
})

export default HeaderView;