# App de Notas - React Native

Aplicación móvil de notas desarrollada con **React Native** usando **Expo**, **Expo Router** y **SQLite** como persistencia local.  
La aplicación permite **crear, editar, eliminar, buscar y fijar notas**, manteniendo la información guardada incluso después de cerrar la app.

---

## Objetivo del proyecto

Este proyecto fue desarrollado como parte de una actividad de titulacion evualuando los siguientes criterios:

- Navegación entre pantallas
- Persistencia local de datos
- Separación de responsabilidades con arquitectura tipo **MVVM**
- Buenas prácticas de diseño de interfaz
- Uso de control de versiones con Git

---

## Tecnologías utilizadas

- **React Native**
- **Expo**
- **Expo Router**
- **TypeScript**
- **Expo SQLite**
- **Git / GitHub**

---

## Arquitectura utilizada

Se implementó una arquitectura **MVVM-like** adaptada a React Native:

- **UI / Views**  
  Pantallas y componentes visuales de la app.

- **ViewModels**  
  Hooks personalizados que manejan el estado y la lógica de negocio.

- **Repository**  
  Encapsula las operaciones CRUD y el acceso a SQLite.

- **Database**  
  Persistencia local mediante una base de datos SQLite.

### Estructura del proyecto

```txt
app/
  _layout.tsx
  index.tsx
  note/
    new.tsx
    [id].tsx

src/
  components/
    EmptyState.tsx
    FloatingButton.tsx
    NoteCard.tsx
    SearchBar.tsx
  db/
    database.ts
    migrations.ts
  models/
    Note.ts
  repositories/
    noteRepository.ts
  theme/
    colors.ts
  utils/
    date.ts
    validators.ts
  viewmodels/
    useNoteEditorViewModel.ts
    useNotesViewModel.ts