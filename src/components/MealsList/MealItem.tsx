import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import MealDetails from "../MealDetails";
import { RootStackParamList } from "../../lib/types";
import { colors } from "constant";

type MealItemProps = {
  id: string;
  title: string;
  imageUrl: string;
  affordability: string;
  complexity: string;
  duration: number;
};

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: MealItemProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const pressHandler = (id: string) => {
    navigation.navigate("SingleMeal", {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={() => pressHandler(id)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <MealDetails
              duration={duration}
              complexity={complexity}
              affordability={affordability}
            />
          </View>

        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    marginTop: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
    color:'#8B4513'
  },
  buttonPressed: {
    opacity: 0.5,
  },
  content:{
    backgroundColor:'#FFF5EE'
  }
});

export default MealItem;
