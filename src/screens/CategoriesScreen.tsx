import React, { useEffect } from "react";
import { FlatList, LogBox, ScrollView, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { singleCategoryTypes } from "../lib/types";

type CategoriesScreenProps = {
  navigation: any;
};

type renderCategoryItemProps = {
  item: singleCategoryTypes;
};

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  const renderCategoryItem = ({ item }: renderCategoryItemProps) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    };

    return (
      <CategoryGridTitle
        title={item.title}
        image={item.image}
        onPress={pressHandler}
      />
    );
  };

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
}, [])

  return (
    <ScrollView style={styles.rootContainer} showsVerticalScrollIndicator={false}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  singleItem: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
});

export default CategoriesScreen;