import { useCallback, useState } from "react";
import { Note } from "../models/Note";
import { noteRepository } from "../repositories/noteRepository";

export function useNotesViewModel() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [search, setSearch] = useState("");

  const loadNotes = useCallback(() => {
    const data = search.trim()
      ? noteRepository.search(search)
      : noteRepository.getAll();

    setNotes(data);
  }, [search]);

  const deleteNote = useCallback((id: number) => {
    noteRepository.delete(id);
    loadNotes();
  }, [loadNotes]);

  const togglePin = useCallback((id: number, currentValue: number) => {
    noteRepository.togglePin(id, currentValue);
    loadNotes();
  }, [loadNotes]);

  return {
    notes,
    search,
    setSearch,
    loadNotes,
    deleteNote,
    togglePin,
  };
}