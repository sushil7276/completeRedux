import { useDispatch, useSelector } from "react-redux";
import "./NoteList.css";
// import { deleteNote } from "../../redux/actions/noteActions";
import { noteSelector, notesActions } from "../../redux/reducers/noteReducer";

function NoteList() {
  const notes = useSelector(noteSelector);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <p>{note.createdOn}</p>
            <p className="note-content">{note.text}</p>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(notesActions.deleteNote(index))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
