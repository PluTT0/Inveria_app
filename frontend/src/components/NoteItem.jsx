import React from 'react'
import { useSelector } from 'react-redux'
const NoteItem = ({ note }) => {

  const { user } = useSelector((state) => state.auth)
  return (
    <div className='note' style={{
      backgroundColor: note.isAdmin ? 'rgba(0,0,0,0.7)' : '#fff',
      color: note.isAdmin ? '#fff' : '#000',
      marginBottom: '20px'
    }}>
      <h4>Note from {note.isAdmin ? <span>Staff</span> : <span>{user.name}</span>}</h4>
      <p>{note.text}</p>
      <div className='note-date'>
        {new Date(note.createdAt).toLocaleString("us-US")}
      </div>
    </div>
  )
}

export default NoteItem;