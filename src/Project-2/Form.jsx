import './Form.css';
import React from 'react';
import Navigation from './Navigation/Navigation';
import ContactHeader from './ContactHeader/ContactHeader';
import ContactForm from './ContactForm/ContactForm';

const Form = () => {
  return (
    <div>
        <Navigation/>
        <main>
            <ContactHeader/>
            <ContactForm/>

        </main>

    </div>
  )
}

export default Form