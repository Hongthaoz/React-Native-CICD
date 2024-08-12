import { Pressable, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"

type IconButtonProps = {
  icon: string;
  color: string;
  onPress: () => void;
};

const IconButton = ({ icon, color, onPress }: IconButtonProps) => {
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} onPress={onPress} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});

export default IconButton;