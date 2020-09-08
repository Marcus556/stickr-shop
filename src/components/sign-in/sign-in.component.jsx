import React, { Component } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

export default class signIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMsg: '',
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]:value })
    console.log(this.state.email)
  }

  handleSubmit = async event => {
    event.preventDefault()
    const  { email, password } = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({email: '', password: ''})
    }catch(error) {
      console.log(error)
      this.setState({errorMsg: error.message})
    }
  }


  render() {
    return (
      <div className='sign-in'>
        <h2>Sign in {this.state.name}</h2>
        <span>Sign in with your email and password</span>
        <form 
        className='sign-in-form' 
        onSubmit={this.handleSubmit}
        >
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required

          />        
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
            auto-complete='current-password'
          /> 
          <div className='error-message'>
          <span>{this.state.errorMsg}</span>
          </div>

          <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Google Sign In</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
