import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TabLink from '../components/TabLink';
import colors from '../config/colors';
import { updateGrammage } from '../store/paperAttribute';

function TabLinkView({ grammageOptions }) { //Paper Type Section

  const { grammageIndex } = useSelector(state => state.paperAttribute);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {grammageOptions.map((option) =>
        <TabLink key={option.id} title={option.name} chipState={grammageIndex === grammageOptions.indexOf(option) ? true : false} handleOnPress={() => dispatch(updateGrammage(option.id - 1))} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 20,
    marginTop: 10,
    marginBottom: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})

export default TabLinkView;