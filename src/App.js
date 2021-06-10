import React, { useState, useEffect } from 'react'
import Dashboard from "./dashboard/Dashboard"
import SignInSide from "./Signin"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [USDT, setUSDT] = useState(10000)
  const [doge, setDoge] = useState(10000)
  return (    
      <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Dashboard  doge={doge} setDoge={setDoge} USDT={USDT} setUSDT={setUSDT} user={user} setUser={setUser}/>
          </Route>
          <Route path="/signin">
            <SignInSide 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            user={user} 
            setUser={setUser}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            doge={doge} setDoge={setDoge} USDT={USDT} setUSDT={setUSDT}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
