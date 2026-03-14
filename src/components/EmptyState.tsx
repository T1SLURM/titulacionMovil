import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No hay notas todavía</Text>
      <Text style={styles.subtitle}>
        Crea tu primera nota con el botón de abajo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
  },
  subtitle: {
    marginTop: 10,
    textAlign: "center",
    lineHeight: 20,
    color: colors.textMuted,
  },
});