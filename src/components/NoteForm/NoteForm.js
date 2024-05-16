import { useState } from "react";
import "./NoteForm.css";
import { useDispatch, useSelector } from "react-redux";
// import { addNote } from "../../redux/actions/noteActions";
import { notesActions } from "../../redux/reducers/noteReducer";
import {
  notificationSelector,
  resetNotification,
} from "../../redux/reducers/notoficationReducer";

function NoteForm() {
  const [NoteText, setNoteText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);

  if (message) {
    setTimeout(() => {
      dispatch(resetNotification());
    }, 3000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(notesActions.addNote(NoteText));
    setNoteText("");
  };

  return (
    <div className="container">
      {/* conditionally show the below div with alert message */}
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          className="form-control mb-3"
          value={NoteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
