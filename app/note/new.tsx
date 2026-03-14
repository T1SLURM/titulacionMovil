import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { colors } from "../../src/theme/colors";
import { useNoteEditorViewModel } from "../../src/viewmodels/useNoteEditorViewModel";

export default function NewNoteScreen() {
  const router = useRouter();

  const {
    title,
    setTitle,
    content,
    setContent,
    isPinned,
    setIsPinned,
    error,
    save,
  } = useNoteEditorViewModel();

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
          placeholder="Escribe un título"
          placeholderTextColor={colors.textMuted}
        />

        <Text style={styles.label}>Contenido</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={content}
          onChangeText={setContent}
          placeholder="Escribe el contenido"
          placeholderTextColor={colors.textMuted}
          multiline
          textAlignVertical="top"
        />

        <View style={styles.pinCard}>
          <Text style={styles.pinText}>Fijar nota</Text>
          <Switch
            value={isPinned === 1}
            onValueChange={(value) => setIsPinned(value ? 1 : 0)}
            trackColor={{ false: "#CBD5E1", true: "#93C5FD" }}
            thumbColor={isPinned === 1 ? colors.primary : "#FFFFFF"}
          />
        </View>

        {!!error && <Text style={styles.error}>{error}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 15,
    fontWeight: "700",
    color: colors.text,
  },
  input: {
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    fontSize: 15,
    color: colors.text,
  },
  textArea: {
    minHeight: 180,
  },
  pinCard: {
    marginBottom: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pinText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.text,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    backgroundColor: colors.primary,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  error: {
    marginBottom: 12,
    color: colors.danger,
    fontWeight: "600",
  },
}); 