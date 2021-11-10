import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function AppTextInput({ inputTitle, textTitle }) {
  return (
    <View style={styles.sliderinput}>
      <AppText style={{color: colors.white, fontSize: 15, fontFamily: "Roboto", fontWeight: "bold"}}>{textTitle}</AppText>
      <TextInput style={styles.input}>{inputTitle}</TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  input:{
    color: colors.white,
    backgroundColor: colors.greyblue,
    padding: 5,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 10,
    fontSize: 12,
    fontFamily: "Roboto",
    fontWeight: "bold"
  },
  sliderinput: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
})

export default AppTextInput;