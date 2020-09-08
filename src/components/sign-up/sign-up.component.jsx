import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfile } from '../../firebase/firebase.utils'
import './sign-up.styles.scss';


export default class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmedPassword: '',
      errorMsg: '',
    }
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]:value})
  }
  handleSubmit = async event => {
    event.preventDefault();
    const {displayName, email, password, confirmedPassword} = this.state;

    if(password !== confirmedPassword) {
      this.setState({errorMsg: "Passwords don't match"})
      return
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfile(user, {displayName} )
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmedPassword: '',
      })
    }catch(error) {
      console.log(error)
    }
  }

  render() {
    const {displayName, email, password, confirmedPassword} = this.state;
    return (
      <div className='sign-up'>
      <h2 className='title'>New at Stickr?</h2>
      <span>Sign up below!</span>
      <form onSubmit={this.handleSubmit} className='sign-up-form'>
        <FormInput
        type='text'
        name='displayName'
        value={displayName}
        onChange={this.handleChange}
        label='Display Name'
        required  
        />
         <FormInput
        type='email'
        name='email'
        value={email}
        onChange={this.handleChange}
        label='Email'
        required  
        />
         <FormInput
        type='password'
        name='password'
        value={password}
        onChange={this.handleChange}
        label='Password'
        required  
        />
         <FormInput
        type='password'
        name='confirmedPassword'
        value={confirmedPassword}
        onChange={this.handleChange}
        label='Confirm the password'
        required 
        />
        <div className='error-message'>
          <span>{this.state.errorMsg}</span>
        </div>
        <CustomButton type='submit'>Sign Up!</CustomButton>
      </form>
      </div>
    )
  }
}
