
import f  from 'firebase/app'
import 'firebase/auth';
 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCisogwTuSqsNPYXw_C3dU3U5PMdjVMfiY",
    authDomain: "speedforcedb.firebaseapp.com",
    databaseURL: "https://speedforcedb-default-rtdb.firebaseio.com",
    projectId: "speedforcedb",
    storageBucket: "speedforcedb.appspot.com",
    messagingSenderId: "894684688229",
    appId: "1:894684688229:web:abdacb76ae2695b1e77b8c",
    measurementId: "G-DXT1M8K3MP"
  };

  if (!f.apps.length) {
      f.initializeApp(firebaseConfig);
    
 }else {
  
  f.app(); // if already initialized, use that one
 }
  
  
  export default  f 