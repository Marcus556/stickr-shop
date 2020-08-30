import React, {Component} from 'react';
import './App.css';
import './pages/webpage/webpage.styles.scss';
import { Route, Switch } from 'react-router-dom'
import WebPage from './pages/webpage/webpage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component'
import Contact from './pages/contact/contact.component';
import signInAndSignUp from './pages/sign-in-and-up/sign-in-and-up.component';
import { auth, createUserProfile } from './firebase/firebase.utils';

class App extends Component {
  constructor()  {
    super();

    this.state = {
      currentUser: null
    }
  }
  
  unsubscribeFromOauth = null

  //subscribe to Oauth changes
  componentDidMount() {
    this.unsubscribeFromOauth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }, () => console.log(this.state.currentUser.displayName))
        })
      }
      else {
        this.setState({currentUser: userAuth})
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromOauth();
  }
  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
      <Route exact path='/' component={WebPage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/contact' component={Contact} />
      <Route path='/signin' component={signInAndSignUp} />
      </Switch>
      </div>
    );
  }

}

export default App;