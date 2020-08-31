import React, {Component} from 'react';
import './App.css';
import './pages/webpage/webpage.styles.scss';
import { Route, Switch, Redirect } from 'react-router-dom'
import WebPage from './pages/webpage/webpage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component'
import Contact from './pages/contact/contact.component';
import SignInAndSignUp from './pages/sign-in-and-up/sign-in-and-up.component';
import { auth, createUserProfile } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'

class App extends Component {

  
  unsubscribeFromOauth = null

  //subscribe to Oauth changes
  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromOauth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
            })
        })
      }
      else {
        setCurrentUser(userAuth)
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromOauth();
  }
  render() {
    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={WebPage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/contact' component={Contact} />
      <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
      </Switch>
      </div>
    );
  }

}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);