// Containers => Header, Footer, ViewCalculator, Middle
// Redux Tool Kit => Single Reducer, useselector for states
// Handle Margin => Pixel Perfect
// input change

import React, { useEffect } from 'react';
import { StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeWeight } from '../store/paperWeight';

import ViewCalculator from '../containers/ViewCalculator';
import StatsView from '../containers/StatsView';
import HeaderView from '../components/HeaderView';
import TabLinkView from '../containers/TabLinkView';
import PageSizeView from '../containers/PageSizeView';
import OptionsView from '../containers/OptionsView';

const grammageOptions = [
  { id: 1, name: 'DIN A', value: 10 },
  { id: 2, name: 'DIN B', value: 5 },
  { id: 3, name: 'DIN C', value: 15 },
  { id: 4, name: 'DIN D', value: 20 },
  { id: 5, name: 'US Formate', value: 25 },
  { id: 6, name: 'JIS B', value: 30 },
  { id: 7, name: 'Custom' }
];

const pageFormats = [
  { id: 1, name: 'A2', length: 10, width: 5 },
  { id: 2, name: 'A3', length: 15, width: 10 },
  { id: 3, name: 'A4', length: 10, width: 10 },
  { id: 4, name: 'A5', length: 25, width: 30 },
  { id: 5, name: 'A6', length: 30, width: 35 },
  { id: 6, name: 'DIN LANG', length: 35, width: 40 },
  { id: 7, name: 'Custom' }
];

function MainScreen() {
  const dispatch = useDispatch();

  const { noOfSheets, grammageValue, pageSize, paperLength, paperWidth } = useSelector(state => state.paperAttribute);

  useEffect(() => {
    let paperWeight = ((paperLength/0.001) + (paperWidth/0.001) + (grammageValue)) / noOfSheets;
    dispatch(changeWeight(paperWeight));
  });

  return (
    <ScrollView style={styles.container}>
      <HeaderView title="Paper Calculator" />
      <ImageBackground
        source={require("../assets/bg1.png")}
        imageStyle={{ borderRadius: 10}}
        style={styles.imageContainer}
      >
        {/* could be better name */}
        <ViewCalculator /> 
        <StatsView />
      </ImageBackground>
      <TabLinkView grammageOptions={grammageOptions} />
      <PageSizeView pageFormats={pageFormats} />
      <OptionsView />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  imageContainer: {
    padding: 20,
    marginBottom: 0,
    paddingBottom: 0,
    borderRadius: 25,
  }
})

export default MainScreen;