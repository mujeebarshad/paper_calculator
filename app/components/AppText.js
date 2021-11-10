import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import colors from '../config/colors';
import { IrishGrover_400Regular } from '@expo-google-fonts/irish-grover';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

function AppText({children, style}) {
  let [fontsLoaded, error] = useFonts({ IrishGrover_400Regular, 'Irish-Grover': require('../assets/fonts/irish-grover.ttf') });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <Text style={[styles.text, style]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: 20,
    fontFamily: "Irish-Grover",
  }
})

export default AppText;