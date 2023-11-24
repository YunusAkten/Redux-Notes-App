import "./app.css";
import AddNote from "./components/NoteForm";
import NotesList from "./components/NotesList";
import logo from "./assets/notepad.svg";
import NoteSearch from "./components/NoteSearch";
function App() {
  return (
    <div className=" my-4 app w-50  d-flex justify-content-center container   ">
      <div className="row justify-content-center">
        <h1 className=" logoName  my-4 px-0 text-center">Take Note</h1>
        <img className="noteLogo  my-4" src={logo} alt="notepad logo" />
        <NoteSearch />
        <AddNote />
        <NotesList></NotesList>
      </div>
    </div>
  );
}

export default App;
{
  /* <a href="https://iconscout.com/icons/notepad" class="text-underline font-size-sm" target="_blank">Notepad</a> by <a href="https://iconscout.com/contributors/superndre" class="text-underline font-size-sm" target="_blank">SuperNdre</a> */
}
