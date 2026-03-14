import { Pressable, StyleSheet, Text, View } from "react-native";
import { Note } from "../models/Note";
import { colors } from "../theme/colors";
import { formatDate } from "../utils/date";

type Props = {
  note: Note;
  onPress: () => void;
  onDelete: () => void;
  onTogglePin: () => void;
};

export default function NoteCard({
  note,
  onPress,
  onDelete,
  onTogglePin,
}: Props) {
  const wasEdited = note.createdAt !== note.updatedAt;

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.title} numberOfLines={1}>
          {note.title}
        </Text>

        {note.isPinned === 1 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Fijada</Text>
          </View>
        )}
      </View>

      <Text style={styles.content} numberOfLines={3}>
        {note.content?.trim() ? note.content : "Sin contenido"}
      </Text>

      <View style={styles.datesContainer}>
        <Text style={styles.createdDate}>
          Creada: {formatDate(note.createdAt)}
        </Text>

        {wasEdited && (
          <Text style={styles.updatedDate}>
            Editada: {formatDate(note.updatedAt)}
          </Text>
        )}
      </View>

      <View style={styles.actions}>
        <Pressable onPress={onTogglePin}>
          <Text style={styles.pinAction}>
            {note.isPinned ? "Desfijar" : "Fijar"}
          </Text>
        </Pressable>

        <Pressable onPress={onDelete}>
          <Text style={styles.deleteAction}>Eliminar</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 14,
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    backgroundColor: "#FEF3C7",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#92400E",
  },
  content: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 21,
    color: colors.textMuted,
  },
  datesContainer: {
    marginTop: 12,
    gap: 4,
  },
  createdDate: {
    fontSize: 12,
    color: colors.textMuted,
  },
  updatedDate: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: "600",
  },
  actions: {
    marginTop: 14,
    flexDirection: "row",
    gap: 18,
  },
  pinAction: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.primary,
  },
  deleteAction: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.danger,
  },
});
