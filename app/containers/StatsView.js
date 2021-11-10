import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import AppText from '../components/AppText';
import colors from '../config/colors';

function StatsView() {
  const { weight } = useSelector(state => state.paperWeight);

  return (
    <View style={styles.bottomContainer}>
      <AppText style={{color: colors.white}}>{weight} g</AppText>
      <AppText style={{color: colors.white, fontSize: 15}}>Per Copy</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    height: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    marginLeft: -20,
    marginRight: -20,
    marginTop: 10,
    backgroundColor: colors.lightblue,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default StatsView;