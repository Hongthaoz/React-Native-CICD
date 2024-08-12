import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { singleMealTypes } from "../lib/types";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import ListIngredient from "components/MealDetail/ListIngredients";
import IconButton from "../components/IconButton";
// import { useFavoriteContext } from "../lib/hooks";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
import { colors } from "constant";

type SingleMealProps = {
  route?: {
    params: { mealId: string };
  };
  navigation?: any;
};

export default function SingleMeal({ route, navigation }: SingleMealProps) {
  // const favoriteMealCtx = useFavoriteContext();
  const favoriteMealIds = useAppSelector((state) => state.favoriteMeals.ids);
  const dispatch = useAppDispatch();

  if (!route) return null;
  const mealId = route?.params.mealId;

  const meal = MEALS.find((meal) => meal.id === mealId);
  if (!meal) return null;

  const {
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
  } = meal as singleMealTypes;

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      // favoriteMealIds.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealIds.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? "star" : "star-outline"}
          color={colors.blue}
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [title, navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.mainTitle}>{title}</Text>
      <View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Thành phần</Subtitle>
          <ListIngredient data={ingredients} />
          <Subtitle>Hướng dẫn</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
    color: '#8B4513'
  },
  image: {
    width: "100%",
    height: 350,
    shadowColor: "black",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
});
