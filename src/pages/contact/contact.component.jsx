import React from 'react'
import ContactForm from '../../components/contact-form/contact-form.component'
import { Spring } from 'react-spring/renderprops';
import './contact.styles.scss'

export default function Contact() {
  return (
    <Spring
    from={{ opacity: 0}}
    to={{ opacity: 1 }}
    >
      {props => (
        <div style={props}>
          <div className='contact'>
            <ContactForm />
          </div>
        </div>
      )}
    </Spring>

  )
}
