import { useState, useEffect } from 'react'

import './App.css'
import { Note } from './Note'
import { getAllNotes, createNote, updateNote } from './services/notes/notes'

export default function App () {
  const [notes, setNotes] = useState([])
  const [input, setInput] = useState('')
  const [showImportant, setShowImportant] = useState(false)

  useEffect(() => {
    console.log('useEffect')
    getAllNotes().then((notes) => setNotes(notes))

    return () => {
      console.log('RemoveEffect')
    }
  }, [])

  const handleClick = () => {
    setShowImportant((prevState) => !prevState)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newObject = {
      content: input,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    createNote(newObject).then((response) => {
      setNotes([...notes, response])
      setInput('')
    })
  }

  const handleOnChange = (event) => {
    setInput(event.target.value)
  }

  const toggleImportance = (id) => {
    const note = notes.find((note) => note.id === id)
    const changedNote = { ...note, important: !note.important }

    updateNote(id, changedNote).then((response) => {
      setNotes((prevState) => prevState.map(note => note.id !== id ? note : response))
    })
  }

  return (
    <div className='principal'>
      <h1>Notes</h1>
      <button onClick={handleClick}>show {showImportant ? 'all' : 'important'}</button>
      <ol>
        {notes
          .filter((note) => showImportant ? note.important : note)
          .map((note) => (
            <Note key={note.id} note={note} toggleImportance={() => toggleImportance(note.id)} />
          ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input onChange={handleOnChange} type='text' value={input} />
        <button>Save</button>
      </form>
    </div>
  )
}
