import { useState, useEffect } from "react";

import "./App.css";
import { Note } from "./Note";
import { getAllNotes, createNote } from "./services/notes/notes";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("useEffect")
    getAllNotes().then((notes) => setNotes(notes));

    return () => {
      console.log("RemoveEffect")
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newNote = {
      title: input,
      body: "Prova",
      userId: 1,
    };

    createNote(newNote).then((response) => {
      setNotes([...notes, response]);
      setInput("");
    });
  };

  const handleOnChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input onChange={handleOnChange} type='text' value={input} />
        <button>Save</button>
      </form>
    </div>
  );
}
