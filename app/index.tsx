import { useCallback } from "react";
import { Alert, FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { useRouter, useFocusEffect } from "expo-router";
import EmptyState from "../src/components/EmptyState";
import FloatingButton from "../src/components/FloatingButton";
import NoteCard from "../src/components/NoteCard";
import SearchBar from "../src/components/SearchBar";
import { useNotesViewModel } from "../src/viewmodels/useNotesViewModel";

export default function NotesScreen() {
  const router = useRouter();
  const { notes, search, setSearch, loadNotes, deleteNote, togglePin } =
    useNotesViewModel();

  useFocusEffect(
    useCallback(() => {
      loadNotes();
    }, [loadNotes])
  );

  const confirmDelete = (id: number) => {
    Alert.alert(
      "Eliminar nota",
      "¿Seguro que deseas eliminar esta nota?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: () => deleteNote(id),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SearchBar value={search} onChangeText={setSearch} />

        <FlatList
          data={notes}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <NoteCard
              note={item}
              onPress={() => router.push(`/note/${item.id}`)}
              onDelete={() => confirmDelete(item.id)}
              onTogglePin={() => togglePin(item.id, item.isPinned)}
            />
          )}
          ListEmptyComponent={<EmptyState />}
          contentContainerStyle={notes.length === 0 ? { flex: 1 } : undefined}
        />

        <FloatingButton onPress={() => router.push("/note/new")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },
  content: {
    flex: 1,
    padding: 16,
  },
});