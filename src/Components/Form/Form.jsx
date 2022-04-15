import React, { useState } from 'react'
import  firebases from '../firebase'
import firebase from 'firebase'
 import './Form.css'
export default  function Form() {

   const usersRef = firebase.firestore().collection('users');
   const snapshot =  usersRef.get();
   console.log(snapshot)
  const [state , setState] = useState(
    {
      
    }
  )
  
  const  handleChange = (e) =>{
        const {name, value } = e.target
          setState({
            [name]: value
          })
      }
    const  configureCaptcha = () =>{
        window.recaptchaVerifier = new firebases.auth.RecaptchaVerifier('sign-in-button', {
          'size': 'invisible',
          'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignInSubmit();
            console.log("Recaptca varified")
          },
          defaultCountry: "IN"
        });
      }
    const onSignInSubmit = (e) => {
        e.preventDefault()
         configureCaptcha()
        const phoneNumber = "+91" +  state.mobile
        console.log(phoneNumber)
        const appVerifier = window.recaptchaVerifier;
        firebases.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;
              console.log("OTP has been sent")
              
            }).catch((error) => {
              // Error; SMS not sent
              // ...
              console.log('error')
            });
      }
    const  onSubmitOTP = (e) =>{
        e.preventDefault()
        const code =  state.otp
        console.log(code)
        window.confirmationResult.confirm(code).then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(JSON.stringify(user))
          alert("User is verified")
          
            
        }).catch((error) => {
           alert("Something went wrong")
        });
      }
 
    return (
       <>
       <div className="container-form">
       <h1>Verify User</h1>
        <form className='form-cont' onSubmit={ onSignInSubmit}>
          <div id="sign-in-button"></div>
          <input type="text" name="mobile" placeholder="Name" required  />

          <input type="tel" name="mobile" placeholder="Mobile number" required onChange={ handleChange}/>
          <button className='btn btn-lg btn-primary' type="submit">Submit</button>
        </form>

        <h2>Enter OTP</h2>
        <form className='form-cont' onSubmit={ onSubmitOTP}>
          <input type="number" name="otp" placeholder="OTP Number" required onChange={ handleChange}/>
          <button className='btn btn-lg btn-success' type="submit">Submit</button>
        </form>
        </div>
       </>
    )
   
}
