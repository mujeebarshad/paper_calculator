import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Chip } from 'react-native-elements';
import colors from '../config/colors';

function TabLink({ title, chipState, handleOnPress }) {
  return (
    //Chip itself touchable opacity
    <TouchableOpacity>
      <Chip title={title} buttonStyle={chipState ? styles.selected : styles.unselected} titleStyle={{color: chipState ? colors.white : colors.grey}} onPress={handleOnPress} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  selected: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: colors.purplishgrey
  },
  unselected: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: colors.white,
  }
})

export default TabLink;