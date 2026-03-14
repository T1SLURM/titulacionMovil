import { db } from "../db/database";
import { Note } from "../models/Note";

export const noteRepository = {
  getAll(): Note[] {
    return db.getAllSync<Note>(
      `SELECT * FROM notes
       ORDER BY isPinned DESC, datetime(updatedAt) DESC`
    );
  },

  getById(id: number): Note | null {
    const result = db.getFirstSync<Note>(
      `SELECT * FROM notes WHERE id = ?`,
      [id]
    );
    return result ?? null;
  },

  create(title: string, content: string, isPinned = 0) {
    const now = new Date().toISOString();
    db.runSync(
      `INSERT INTO notes (title, content, createdAt, updatedAt, isPinned)
       VALUES (?, ?, ?, ?, ?)`,
      [title, content, now, now, isPinned]
    );
  },

  update(id: number, title: string, content: string, isPinned: number) {
    const now = new Date().toISOString();
    db.runSync(
      `UPDATE notes
       SET title = ?, content = ?, updatedAt = ?, isPinned = ?
       WHERE id = ?`,
      [title, content, now, isPinned, id]
    );
  },

  delete(id: number) {
    db.runSync(`DELETE FROM notes WHERE id = ?`, [id]);
  },

  search(query: string): Note[] {
    return db.getAllSync<Note>(
      `SELECT * FROM notes
       WHERE title LIKE ? OR content LIKE ?
       ORDER BY isPinned DESC, datetime(updatedAt) DESC`,
      [`%${query}%`, `%${query}%`]
    );
  },

  togglePin(id: number, currentValue: number) {
    const now = new Date().toISOString();
    db.runSync(
      `UPDATE notes
       SET isPinned = ?, updatedAt = ?
       WHERE id = ?`,
      [currentValue === 1 ? 0 : 1, now, id]
    );
  },
};