import { Pressable, StyleSheet, Text, View } from "react-native";
import { Note } from "../models/Note";
import { formatDate } from "../utils/date";

type Props = {
  note: Note;
  onPress: () => void;
  onDelete: () => void;
  onTogglePin: () => void;
};

export default function NoteCard({ note, onPress, onDelete, onTogglePin }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.row}>
        <Text style={styles.title}>
          {note.isPinned ? "📌 " : ""}
          {note.title}
        </Text>
      </View>

      <Text numberOfLines={2} style={styles.content}>
        {note.content || "Sin contenido"}
      </Text>

      <Text style={styles.date}>Actualizado: {formatDate(note.updatedAt)}</Text>

      <View style={styles.actions}>
        <Text style={styles.action} onPress={onTogglePin}>
          {note.isPinned ? "Desfijar" : "Fijar"}
        </Text>
        <Text style={[styles.action, styles.delete]} onPress={onDelete}>
          Eliminar
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  content: {
    marginTop: 8,
    fontSize: 14,
    color: "#475569",
  },
  date: {
    marginTop: 10,
    fontSize: 12,
    color: "#64748B",
  },
  actions: {
    marginTop: 12,
    flexDirection: "row",
    gap: 16,
  },
  action: {
    fontWeight: "600",
    color: "#2563EB",
  },
  delete: {
    color: "#DC2626",
  },
});