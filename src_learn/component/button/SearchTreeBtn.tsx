import React, { useState, useCallback } from 'react';
import { View, StyleSheet, ScrollView, TextInput,Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { isTablet } from 'react-native-device-info';
import _debounce from 'lodash/debounce';

import { colors, fontSize } from '../../constant';
import { scale, hScale } from '../../utils/resolutions';

interface SearchTreeProps {
  dataTree: object[];
}

const Listview: React.FC<SearchTreeProps> = ({ dataTree }) => {
  const [result, setResult] = useState(dataTree);

  const Search = useCallback(
    _debounce((text: string, data: object[]) => {
      if (!text) {
        setResult(data);
      } else {
        const filteredData = data.filter(element =>
          Object.values(element).some(
            value =>
              value &&
              value.toString().toLowerCase().includes(text.toLowerCase())
          )
        );
        setResult(filteredData);
      }
    }, 300),
    []
  );

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.searchBar}>
        <Ionicons
          name="search-outline"
          size={isTablet() ? scale(16) : scale(22)}
          color={colors.red}
        />
        <TextInput
          onChangeText={text => Search(text, dataTree)}
          placeholder="Tìm kiếm tại đây"
          style={styles.textInput}
          autoCapitalize="none"
          returnKeyType="search"
          returnKeyLabel="Search"
        />
      </View>
      <View style={styles.container}>
        {result.length > 0 ? (
          result.map((item, index) => (
            <Text key={index}>{JSON.stringify(item)}</Text>
          ))
        ) : (
          <Text style={styles.textNodata}>Không tìm thấy kết quả</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: scale(1),
    borderColor: '#d6dbe1',
    paddingHorizontal: scale(10),
    height: hScale(42),
    borderRadius: scale(35),
    backgroundColor: colors.white,
  },
  textInput: {
    width: '95%',
    marginLeft: scale(4),
    fontSize: fontSize.size17,
  },
  container: {
    paddingHorizontal: scale(15),
  },
  textNodata: {
    textAlign: 'center',
    marginTop: hScale(20),
    color: colors.systemGray1,
  },
});

export default Listview;
