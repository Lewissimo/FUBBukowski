import React from 'react'
import { NoteInterface } from '../Offer'

const Note = ({value} : {value: NoteInterface}) => {
  return (
    <div className='Note'>
        <h3>{value.title}</h3>
        <p>
        {value.text}
        </p>
    </div>
  )
}

export default Note