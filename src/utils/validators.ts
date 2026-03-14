export function validateNoteTitle(title: string): string | null {
  if (!title.trim()) return "El título no puede estar vacío";
  return null;
}