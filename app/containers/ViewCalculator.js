import React from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';
import MaterialIcon from '../components/MaterialIcon';
import { useDispatch, useSelector } from 'react-redux';
import { changeByAmount, decrement, increment } from '../store/paperAttribute';

function ViewCalculator() {

  const { noOfSheets } = useSelector(state => state.paperAttribute);
  const dispatch = useDispatch();

  const updateImage = sheetCount => {
    sheetCount = parseInt(sheetCount);
    //image files should be in config as well
    let imagePath = require("../assets/sheets/sheet1.png");
    if (sheetCount <= 1){
      imagePath = require("../assets/sheets/sheet1.png");
    }
    else if (sheetCount >= 5 && sheetCount < 10){
      imagePath = require("../assets/sheets/sheet2.png");
    }
    else if (sheetCount >= 10 && sheetCount < 25){
      imagePath = require("../assets/sheets/sheet3.png");
    }
    else if (sheetCount >= 25 && sheetCount < 50){
      imagePath = require("../assets/sheets/sheet4.png");
    }
    else if (sheetCount >= 50){
      imagePath = require("../assets/sheets/sheet5.png");
    }
    return imagePath;
  }

  return (
    <View style={styles.container}>
      <Image source={updateImage(noOfSheets)} />
      <View style={styles.subContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.text}
            keyboardType='number-pad'
            onChangeText={(e) => dispatch(changeByAmount(parseInt(e.replace(/[^0-9]/g, ''))))} 
            value={noOfSheets.toString()}
          />
          <AppText style={{fontSize: 12, color: colors.white}}>Sheets</AppText>
        </View>
        <MaterialIcon iconName="plus-circle" styles={styles.plusIcon} onPress={() => dispatch(increment())} />
        <MaterialIcon iconName="minus-circle" styles={styles.minusIcon} onPress={() => dispatch(decrement())} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  minusIcon: {
    position: 'absolute',
    top: 50,
    right: 18
  },
  plusIcon: {
    position: 'absolute',
    top: -15,
    right: 18
  },
  subContainer: {
    height: 60,
    width: 60,
    marginVertical: 30,
    color: colors.white,
    justifyContent: 'space-between', // to handle absolute
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 10
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 6,
    marginTop: 5
  }
})

export default ViewCalculator;