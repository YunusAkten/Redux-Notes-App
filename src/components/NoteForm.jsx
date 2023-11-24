import { useState } from "react";
import { TwitterPicker } from "react-color";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/notesSlicer";
function NoteForm() {
  const [color, setColor] = useState("#ffffff"); // define a state for the color prop
  const dispatch = useDispatch();
  // setState when onChange event triggered
  const handleChange = (color) => {
    setColor(color.hex);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    dispatch(
      addNote({
        text,
        color,
      })
    );
  };
  return (
    <div className=" my-4 ">
      <form className="row" onSubmit={handleSubmit}>
        <textarea
          required
          className="form-control shadow-sm col-12"
          placeholder="Description"
          type="text"
        />

        <TwitterPicker
          color={color}
          onChange={handleChange}
          className="my-3 col-8  shadow-sm "
        />
        <button className=" col-3 h-50  btn-sm  ms-auto my-3 btn btn-success   ">
          Add
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
