import { Stack } from "expo-router";
import { useEffect } from "react";
import { initDatabase } from "../src/db/migrations";

export default function RootLayout() {
  useEffect(() => {
    initDatabase();
  }, []);

  return (
    <Stack screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen name="index" options={{ title: "Mis notas" }} />
      <Stack.Screen name="note/new" options={{ title: "Nueva nota" }} />
      <Stack.Screen name="note/[id]" options={{ title: "Editar nota" }} />
    </Stack>
  );
}