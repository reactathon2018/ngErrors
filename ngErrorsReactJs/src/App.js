import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import './App.css';
import Feedback from './Feedback';
import Login from './Login';
import Home from './Home';
import Jobs from './Jobs';
import EmployerFeedback from './EmployerFeedback';

const WelcomeUser = ({user})=> {
  // This is a dumb "stateless" component
  return (
    <div>
    
      <li>Welcome {user.username}</li>!
      
    </div>
  )
}
const SignOut = ({onSignOut})=> {
  // This is a dumb "stateless" component
  return (
    <div>
      <a href="javascript:;" onClick={onSignOut} style={{float:'right'}}>Sign out  </a>
    </div>
  )
}
class App extends React.Component {
  constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: null
    }
  }
  
  // App "actions" (functions that modify state)
  signIn(username, password) {
    // This is where you would call Firebase, an API etc...
    // calling setState will re-render the entire app (efficiently!)
    this.setState({
      user: {
        username,
        password,
      }
    })
  }
  
  signOut() {
    // clear out user from state
    this.setState({user: null})
  }
  render() {
    return (
      <div>
        { 
          (this.state.user) ? 
          <div>

            <ul>
              <li><Link exact to="/home">Home</Link></li>
              <li><Link exact to="/jobs">Jobs</Link></li>
              <li><Link exact to="/feedback">Feedback</Link></li>
              <li><SignOut onSignOut={this.signOut.bind(this)}/></li>
            </ul>
           <Switch>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/feedback" component={Feedback}/>
              <Route exact path="/jobs" component={Jobs}/>
           </Switch>
          </div>
          :
            <Login onSignIn={this.signIn.bind(this)}/>
        }
      </div>
    );
  }
}
export default App;
