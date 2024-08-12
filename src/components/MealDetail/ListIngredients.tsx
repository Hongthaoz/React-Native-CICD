import { colors } from "constant";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

type Ingredient = {
  imageUrl: string;
  name: string;
  quantity: string;
};

const ListIngredient = ({ data }: { data: Ingredient[] }) => {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint.name}>
      <View style={styles.contentIn}>
        <Image source={{ uri: dataPoint.imageUrl }} style={styles.image} />
        <Text style={styles.itemText}>{dataPoint.name}</Text>
      </View>
      <Text style={styles.itemText}>{dataPoint.quantity}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
  itemText: {
    color: colors.black,
    marginLeft: 10,
    fontSize: 16,
  },
  contentIn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ListIngredient;
