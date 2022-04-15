import React from 'react'
 import './style.css'
import './Components/NavBar/navbar.css'
import Form from './Components/Form/Form.jsx'
 import {Link} from 'react-router-dom'
const Hero = ({ handleLogout }) => {

 
    return (
        <>

     < div className=" p-0 nav-wrapper d-flex m-0">



      <img src="https://speedforce.in/wp-content/uploads/2020/07/logo.png" alt="" />

            <div className="list-cont">
                <ul type='none'  >
                   <Link className='nav-links' to='/'><li   >Home</li></Link> 
                   <Link className='nav-links'  to='/coupon' > <li    >Coupon</li></Link>

                </ul>
            </div>
            </div>
            <nav style={{ marginBottom: '0' }}>
                <button onClick={handleLogout}>Logout</button>
                <h2 className='mt-4 '>Welcome</h2>
            </nav>
           <Form/>
           
             
        </>
    )
}

export default Hero