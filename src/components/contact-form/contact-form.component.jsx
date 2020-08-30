import React, {Component} from 'react';
import FormInput from '../form-input/form-input.component'
import TextArea from '../text-area/text-area.component'
import CustomButton from '../custom-button/custom-button.component'
import './contact-form.styles.scss'


export default class ContactForm extends Component {
  constructor() {
    super();

    this.state={
      name: '',
      email: '',
      message:''
    }
  }
  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]:value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({name: '', email: '', message: ''})
  }

  render(){
    const {name, email, message} = this.state;
    return (
      <div className='contact-form'>
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

      </div>
    )
  }

}
