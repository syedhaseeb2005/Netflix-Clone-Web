import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Component/Login/Login.jsx';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "./FirebaseConfig/firebaseConfig.js";



function App() {
  const user = null;

  useEffect(()=>{
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    // const uid = user.uid;
    console.log(user);
    } else {
    // User is signed out
    // ...
    }
  });
    return unsubscribe()
    
  },[])

  return (
    <>
    <div className='app'>
      <BrowserRouter>
      {!user ? (
        <Login/>
      ):(
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/profile' element={<Profile/>}/> */}
        </Routes>
      )}
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
