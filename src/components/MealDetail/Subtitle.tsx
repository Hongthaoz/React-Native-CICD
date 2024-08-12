import { colors } from "constant";
import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.black,
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
  },
});

export default Subtitle;
