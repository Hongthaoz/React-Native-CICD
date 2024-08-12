import { colors } from "constant";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const List = ({ data }: { data: string[] }) => {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <FontAwesome
        name='circle'
        size={10}
        color={colors.black}
      />
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection:'row',
    alignItems: 'center',
    paddingVertical: 4,

  },
  itemText: {
    color: colors.black,
    marginLeft: 10,
    fontSize: 16,
  },
});
export default List;
