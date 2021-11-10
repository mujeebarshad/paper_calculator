import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { colors } from 'react-native-elements';

function MaterialIcon({ styles, iconName, onPress }) {
  return (
    <TouchableOpacity style={styles} onPress={onPress}>
      <MaterialCommunityIcons name={iconName} color={colors.white} size={25} />
    </TouchableOpacity>
  );
}

export default MaterialIcon;