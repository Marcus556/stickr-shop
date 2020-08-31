import React, {Component} from 'react';
import FormInput from '../form-input/form-input.component'
import TextArea from '../text-area/text-area.component'
import CustomButton from '../custom-button/custom-button.component'
import './contact-form.styles.scss'
import { Spring } from 'react-spring/renderprops';


export default class ContactForm extends Component {
  constructor() {
    super();

    this.state={
      name: '',
      email: '',
      message:'',
      messageSent: false
    }
  }
  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]:value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({name: '', email: '', message: '', messageSent: true})
  }

  render(){
    const {name, email, message, messageSent} = this.state;
    return (

      <div className='contact-form'>
        {messageSent ? 
        (<Spring
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
        {props => (
        <div style={props}>
          <div className='success-msg'>
            <h2>Success!</h2>
            <span>Your message was sent!</span>
          </div>
        </div>
        )}
      </Spring>)
        : (
        <div>
        <h1>Contact Us</h1>
        <span>Use the form below to contact us.</span>
        <form onSubmit={this.handleSubmit}>
        <div className='contact-form-inputs'>
        <FormInput
          type='text'
          name='name'
          value={name}
          onChange={this.handleChange}
          label='Your name'
          required  
          />
          <FormInput
          type='email'
          name='email'
          value={email}
          onChange={this.handleChange}
          label='Your email'
          required  
          />
          </div>
          <TextArea
          type='text'
          name='message'
          value={message}
          onChange={this.handleChange}
          label='Message'
          required  
          />
        <CustomButton type='submit'>Send!</CustomButton>
        </form>
        </div>)
      }

      </div>
    )
  }

}



