import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  onPress: () => void;
};

export default function FloatingButton({ onPress }: Props) {
  return (
    <Pressable style={styles.fab} onPress={onPress}>
      <Text style={styles.text}>+</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  text: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: -2,
  },
});