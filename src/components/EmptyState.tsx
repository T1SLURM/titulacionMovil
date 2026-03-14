import { StyleSheet, Text, View } from "react-native";

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No hay notas todavía</Text>
      <Text style={styles.subtitle}>Toca el botón + para crear una</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 8,
    color: "#64748B",
  },
});