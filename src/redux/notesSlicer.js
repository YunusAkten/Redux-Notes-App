import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlicer = createSlice({
  name: "notes",
  initialState: {
    items: [
      { id: 1, text: "Learn React Native", color: "#fff" },
      { id: 2, text: "Learn Redux", color: "#7BDCB5" },
    ],
    filteredItems: [],
    filter: false,
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push({ id: nanoid(), ...action.payload });
    },
    deleteNote: (state, action) => {
      state.items = state.items.filter((note) => note.id !== action.payload.id);
    },
    filterNotes: (state, action) => {
      state.filter = false;
      if (action.payload.text.trim());
      {
        state.filter = true;
        state.filteredItems = state.items.filter((note) =>
          note.text.toLowerCase().includes(action.payload.text.toLowerCase())
        );
      }
    },
  },
});
export const { addNote, deleteNote, filterNotes } = notesSlicer.actions;
