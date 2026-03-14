import { Alert, SafeAreaView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useNoteEditorViewModel } from "../../src/viewmodels/useNoteEditorViewModel";

export default function EditNoteScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const id = Number(params.id);

  const {
    title,
    setTitle,
    content,
    setContent,
    isPinned,
    setIsPinned,
    error,
    save,
  } = useNoteEditorViewModel(id);

  const handleSave = () => {
    const ok = save();
    if (!ok) {
      Alert.alert("Validación", "El título no puede estar vacío");
      return;
    }

    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Editar título"
        />

        <Text style={styles.label}>Contenido</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={content}
          onChangeText={setContent}
          placeholder="Editar contenido"
          multiline
          textAlignVertical="top"
        />

        <View style={styles.pinRow}>
          <Text style={styles.label}>Fijar nota</Text>
          <Switch value={isPinned === 1} onValueChange={(v) => setIsPinned(v ? 1 : 0)} />
        </View>

        {!!error && <Text style={styles.error}>{error}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Guardar cambios</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC" },
  content: { flex: 1, padding: 16 },
  label: { fontSize: 16, fontWeight: "600", marginBottom: 8 },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
  },
  textArea: { minHeight: 180 },
  pinRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  error: { color: "#DC2626", marginBottom: 12 },
});