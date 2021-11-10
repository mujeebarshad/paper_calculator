import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AppSliderInput from '../components/AppSliderInput';
import colors from '../config/colors';
import { updateGrammageFromSlider, updatePageLength, updatePageWidth } from '../store/paperAttribute';

function OptionsView() {

  const { grammageValue, paperLength, paperWidth } = useSelector(state => state.paperAttribute);
  const dispatch = useDispatch();

  const handleGrammageChange = (value) => {
    dispatch(updateGrammageFromSlider(value));
  }

  const handleLengthChange = (value) => {
    dispatch(updatePageLength(value));
  }

  const handleWidthChange = (value) => {
    dispatch(updatePageWidth(value));
  }

  return (
    <View style={styles.container}>
      <AppSliderInput textTitle="Length" inputTitle={paperLength} inputUnit="mm" sliderValue={paperLength} handleChange={handleLengthChange} />
      <AppSliderInput textTitle="Width" inputTitle={paperWidth} inputUnit="mm" sliderValue={paperWidth} handleChange={handleWidthChange} />
      <AppSliderInput textTitle="Grammage" inputTitle={grammageValue} inputUnit="g" sliderValue={grammageValue} handleChange={handleGrammageChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkblue,
    borderColor: colors.black,
    padding: 20,
    marginTop: 10,
    borderRadius: 10
  },
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
})

export default OptionsView;