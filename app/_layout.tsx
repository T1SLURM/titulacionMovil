import { Stack } from "expo-router";
import { useEffect } from "react";
import { initDatabase } from "../src/db/migrations";

export default function RootLayout() {
  useEffect(() => {
    initDatabase();
  }, []);

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#F8FAFC",
        },
        headerShadowVisible: false,
        headerTintColor: "#0F172A",
        headerTitleStyle: {
          fontWeight: "700",
        },
        contentStyle: {
          backgroundColor: "#F8FAFC",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Mis Notas",
        }}
      />
      <Stack.Screen
        name="note/new"
        options={{
          title: "Nueva nota",
        }}
      />
      <Stack.Screen
        name="note/[id]"
        options={{
          title: "Editar nota",
        }}
      />
    </Stack>
  );
}
