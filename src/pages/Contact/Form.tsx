import React, { useContext, useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { FirebaseDatabase } from '../../firebase/FirebaseContext';
const FormContact = () => {
  const firebaseDatabase = useContext(FirebaseDatabase);
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        message: ''
    });
    

    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const sendData = {
          to: firebaseDatabase?.contactData?.mail,
          from: 'lewinski.coding@gmail.com',
          subject: 'Wypełniono formularz kontaktowy',
          text: `
          Email nadawcy: ${formData.email}
          Telefon kontaktowy nadawcy: ${formData.phone}

          Wiadomość: "${formData.message}"
          
          `
        }
        axios.post('https://us-central1-fubbukowski-aa040.cloudfunctions.net/sendEmail', sendData)
          .then(response => {
            console.log('Email sent successfully:', response.data);
            // Możesz tutaj dodać jakiś stan, aby wyświetlić sukces użytkownikowi
          })
          .catch(error => {
            console.error('Error sending email:', error);
          });
      };
      
    return (
    <Card className='card-form'>
    <Card.Body>
        <h2 className='text-center'>Napisz do mnie!</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label>Numer telefonu</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Wiadomość</Form.Label>8iu
        <Form.Control
          as="textarea"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Wyślij
      </Button>
    </Form>
    </Card.Body>
    </Card>
  )
}

export default FormContact