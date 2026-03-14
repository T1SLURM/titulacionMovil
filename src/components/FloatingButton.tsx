import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../theme/colors";

type Props = {
  onPress: () => void;
};

export default function FloatingButton({ onPress }: Props) {
  return (
    <Pressable style={styles.fab} onPress={onPress}>
      <Text style={styles.text}>＋</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 20,
    bottom: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    shadowColor: "#000",
    shadowOpacity: 0.14,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 30,
  },
});