/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { deleteNote } from "../redux/notesSlicer";
function NoteCard({ note }) {
  const dispatch = useDispatch();
  const handleDel = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      dispatch(
        deleteNote({
          id: note.id,
        })
      );
    }
  };
  return (
    <div
      className="card  overflow-auto  noteCard  col-12 col-md-6  col-lg-2 m-1  "
      style={{ backgroundColor: note.color }}
    >
      <div className="  ">
        <button onClick={handleDel} className="btn float-end">
          x
        </button>
      </div>
      <div className=" pt-0 card-body">
        <p className="card-text">{note.text}</p>
      </div>
    </div>
  );
}

export default NoteCard;
