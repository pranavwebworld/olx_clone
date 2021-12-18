import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthContext, FirebaseContext } from './store/Context'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/postContext'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';

function App() {

  const { setUser } = useContext(AuthContext)

  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {



    firebase.auth().onAuthStateChanged((user) => {

      setUser(user)



    })


  })


  return (
    <div>

<Post>



<Router>


        <Route exact path='/'>

          <Home />

        </Route>

        <Route path='/signup' >

          <Signup />

        </Route>

        <Route path='/login' >

          <Login />

        </Route>

        <Route path='/create' >

          <Create />

        </Route>

        <Route path='/view' >

          < View />

        </Route>


      </Router>

</Post>


      

    </div>
  );
}

export default App;
