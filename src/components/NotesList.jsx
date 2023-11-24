import { useSelector } from "react-redux";
import NoteCard from "./NoteCard";
function NotesList() {
  let notes = useSelector((state) => state.notes.items);
  const filter = useSelector((state) => state.notes.filter);
  const filteredItems = useSelector((state) => state.notes.filteredItems);
  if (filter) {
    notes = filteredItems;
  }
  return (
    <div className="row justify-content-center">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note}></NoteCard>
      ))}
    </div>
  );
}

export default NotesList;
