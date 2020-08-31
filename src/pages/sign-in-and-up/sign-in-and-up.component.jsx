import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './sign-in-and-up.styles.scss'
import { Spring } from 'react-spring/renderprops';

const SignInAndSignUp = () => (
  <Spring
  from={{ opacity: 0}}
  to={{ opacity: 1}}
  >
    {props => (
      <div style={props}>
        <div className='sign-in-and-up'>
          <SignIn />
          <SignUp />
        </div>
      </div>
    )}
  </Spring>
)

export default SignInAndSignUp


