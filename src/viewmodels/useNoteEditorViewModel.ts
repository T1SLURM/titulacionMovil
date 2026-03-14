import { useEffect, useState } from "react";
import { noteRepository } from "../repositories/noteRepository";
import { validateNoteTitle } from "../utils/validators";

export function useNoteEditorViewModel(id?: number) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPinned, setIsPinned] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    const note = noteRepository.getById(id);
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setIsPinned(note.isPinned);
    }
  }, [id]);

  const save = () => {
    const validationError = validateNoteTitle(title);
    if (validationError) {
      setError(validationError);
      return false;
    }

    setError("");

    if (id) {
      noteRepository.update(id, title, content, isPinned);
    } else {
      noteRepository.create(title, content, isPinned);
    }

    return true;
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    isPinned,
    setIsPinned,
    error,
    save,
  };
}