import React,{useState,useRef} from 'react'
 import './coupon.css'
const Sentmsg = () => {
    const [textmessage, setTextmessage] = useState('');
    const removeMsg = useRef()
    const sendText = _ => {
      removeMsg.current.value=''
      //pass text message GET variables via query string
      fetch(`http://127.0.0.1:4000/send-text?textmessage=${textmessage}`)
       .catch(err => console.error(err))
    }
  
  
  
    const spacer = {
      margin: 28
    }
  
    const textArea = {
      borderRadius: 4,
      width: '20rem',
      height: '15rem',
      fontSize: '1.2rem',
      padding: ' 0.5rem '
  
    }
  
    const buttonStyle = {
      width: '20rem',
      fontSize: '1.5rem'
    }
  return (
    <div>
       <div   style={{ marginTop: 10 }} className="sent-message" >
        <h2 style={{ fontSize: '1.5rem', marginTop: '4rem' }} > Send Text Message </h2>
        <label> Message </label>
        <br />
        <textarea rows={3} value={textmessage} style={textArea}
          onChange={e => setTextmessage(e.target.value)}
          ref={removeMsg}
          />
        <div style={spacer} />
        <button style={buttonStyle} onClick={sendText}> Send Text </button>
      </div> 
   
    </div>
  )
}

export default Sentmsg