import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updatePageSize } from '../store/paperAttribute';
import colors from '../config/colors';

function PageSizeView({ pageFormats }) {

  const { pageSize } = useSelector(state => state.paperAttribute);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        data={pageFormats}
        keyExtractor={format => format.id.toString()}
        horizontal={true}
        renderItem={({ item }) => 
          <TouchableOpacity>
            <Text style={item.id == pageSize ? styles.selectedText : styles.unselectedText} onPress={() => dispatch(updatePageSize(item.id))}>{item.name}</Text>
          </TouchableOpacity>
        }
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colors.spacegrey,
    marginTop: 0,
    padding: 15,
    justifyContent: 'space-evenly',
  },
  selectedText: {
    paddingLeft: 10,
    color: colors.secondary
  },
  unselectedText: {
    paddingLeft: 10,
    color: colors.purplishgrey
  }
});

export default PageSizeView;