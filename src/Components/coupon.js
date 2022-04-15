import React, { useRef, useState } from 'react'
import './coupon.css'
import firebase from 'firebase'
import {Link} from 'react-router-dom'
const Coupon = () => {
  const submitdata = useRef();
   
  const usersCollectionRef = firebase.firestore().collection('coupon');
  const [verify, setVerify] = useState(false);
  
  const getUsers = async () => {
    const snapshot = await usersCollectionRef.get();
    snapshot.forEach(doc => {

      if (submitdata.current.value === doc.data().couponId) {
        setVerify(true)
        submitdata.current.value=''
        alert('success')
      }
      else {
        alert('wrong passwrod');
      }
    });
  };


 
  return (
    <div className="App coupon-app">
      
      <div id='coupon'> 
        <div className="verify-container">
          <p>Password</p>
          <input type="password" ref={submitdata} />
          <button onClick={getUsers} type='submit'>Submit</button>  
        </div>
      
      </div>
         
      {
           verify===true&&
           <Link   to='/sentMessage' > 
              <button style={{width:'20rem',height:'3.5rem',fontWeight:'600',borderRadius:'0'}} className='btn btn-success' >Sent Messages</button>
            </Link>
}
      
    </div>
  );

}

export default Coupon;