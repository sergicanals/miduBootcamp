export const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important'
    : 'make important'

  return (
    <li>
      <span>{note.content}</span>
      <button className="buttonList" onClick={toggleImportance}>{label}</button>
    </li>
  )
}
