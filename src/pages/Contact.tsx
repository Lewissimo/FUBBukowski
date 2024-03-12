import React, { useContext, useState } from 'react'
import './Contact/Contact.scss'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FormContact from './Contact/Form';
import { FirebaseDatabase } from '../firebase/FirebaseContext';
const Contact = () => {
  const firebaseContext = useContext(FirebaseDatabase);
  const text = 'Skontaktuj się już dziś i zacznijmy tworzyć coś wyjątkowego!'
  return (
    <div className='Contact' id='contact'>
      <div className='Content row'>
        <div className='FormSection col-12 col-lg-6'>
          <FormContact />
        </div>
        <div className='ContactSection col-12 col-lg-6'>
          <ul>
            <li><PhoneIcon />{firebaseContext?.contactData?.phone}</li>
            <li><EmailIcon />{firebaseContext?.contactData?.mail}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact