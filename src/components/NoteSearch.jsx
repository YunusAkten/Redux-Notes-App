import { useDispatch } from "react-redux";
import { filterNotes } from "../redux/notesSlicer";
function NoteSearch() {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.value;
    dispatch(
      filterNotes({
        text,
      })
    );
  };
  return (
    <div>
      <form onChange={handleSearch}>
        <input
          className="form-control w-50 mx-auto  shadow-sm"
          placeholder="Search"
          type="text"
        />
      </form>
    </div>
  );
}

export default NoteSearch;
