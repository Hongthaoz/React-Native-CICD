import { colors } from "constant";
import React from "react";
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Platform,
  Image,
} from "react-native";

type CategoryGridTitleProps = {
  title: string;
  image: any;
  onPress: () => void;
};

const width = Dimensions.get("window").width;

const CategoryGridTitle = ({
  title,
  image,
  onPress,
}: CategoryGridTitleProps) => {

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Image style={styles.image} source={image} />
          {/* <View >
            <Text style={styles.title}>{title}</Text>
          </View> */}
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: '#FFF8DC',
    shadowColor: colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  }
});

export default CategoryGridTitle;
