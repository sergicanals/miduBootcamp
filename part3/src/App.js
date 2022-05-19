import { useState } from "react";
import "./App.css";
import { Note } from "./Note";

const notes_json = [
  {
    id: 1,
    content: "HTML is eazy",
    date: new Date().toISOString(),
    important: false,
  },
  {
    id: 2,
    content: "HTML is hard",
    date: new Date().toISOString(),
    important: true,
  },
  {
    id: 3,
    content: "GET and POST",
    date: new Date().toISOString(),
    important: true,
  },
];

export default function App() {
  const [notes, setNotes] = useState(notes_json);
  const [showAll, setShowAll] = useState(true);
  const [input, setInput] = useState("");

  const handleClick = () => {
    setShowAll((prevState) => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newNote = {
      id: notes.length + 1,
      content: input,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    };

    setNotes([...notes, newNote]);
    setInput("");
  };

  const handleOnChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleClick}>
        {showAll ? "Show only important" : "Show all"}
      </button>
      <ol>
        {notes
          .filter((note) => (showAll ? note : note.important === true))
          .map((note) => (
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
