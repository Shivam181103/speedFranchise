import React, { useState, useEffect } from 'react'
import fire from './fire'
import Login from './Login'
import Hero from './Hero'
import { BrowserRouter as Router,Routes   ,Route } from 'react-router-dom';
import Coupon from './Components/coupon';
import Sentmsg from './Components/Sentmsg';
 
function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        // eslint-disable-next-line default-case
        switch(error.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message);
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            break;
        }
      })
  }

  // const handleSignup = () => {
  //   clearErrors()
  //   fire
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .catch(error => {
  //       // eslint-disable-next-line default-case
  //       switch(error.code){
  //         case "auth/email-already-in-use":
  //         case "auth/invalid-email":
  //           setEmailError(error.message);
  //           break;
  //         case "auth/weak-password":
  //           setPasswordError(error.message);
  //           break;
  //       }
  //     })
  // }

  const handleLogout = () => {
    fire.auth().signOut()    
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user)
      {
        clearInputs()
        setUser(user)
      }
      else
      {
        setUser('')
      }
    })
  }

  useEffect(() => {
    authListener()
  } )

  return (
   
    <div className='App m-0'>
    <Router>

      <Routes>
         {user ? 
           <Route path ='/'  element={  <Hero handleLogout={handleLogout}/>}/>  
           :
          <Route path='/' element={<Login 
          email = {email}
          setEmail = {setEmail}
          password = {password}
          setPassword = {setPassword}
          handleLogin = {handleLogin}
          emailError = {emailError}
          passwordError = {passwordError}
        />}/>
        }
        <Route path='/coupon' element={<Coupon/>}/>
        <Route path='/sentmessage' element={<Sentmsg/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;