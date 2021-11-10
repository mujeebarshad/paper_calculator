import React from 'react';
import { StyleSheet } from 'react-native';
import { Slider } from 'react-native-elements';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';

function AppSliderInput({ textTitle, inputTitle, inputUnit, sliderValue, handleChange }) {
  
  return (
    <>
      <AppTextInput textTitle={textTitle} inputTitle={`${inputTitle}  ${inputUnit}`} />
      <Slider
        value={sliderValue}
        onValueChange={(value) => handleChange(value)}
        maximumValue={100}
        minimumValue={1}
        step={1}
        maximumTrackTintColor={colors.greyblue}
        minimumTrackTintColor={colors.mediumblue}
        trackStyle={{height: 2}}
        thumbStyle={styles.sliderstyle}
      />
    </>
  );
}

const styles = StyleSheet.create({
  sliderstyle: {
    backgroundColor: colors.mediumblue,
    width: 25,
    height: 25,
    borderColor: "rgba(55, 206, 255, 0.5)",
    borderWidth: 4
  },
})

export default AppSliderInput;