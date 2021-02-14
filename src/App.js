import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';
import Product from './Views/Product';
import Login from './Views/Login';
import Register from './Views/Register'
import React, {useState} from 'react';



function App() {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name:'aaa',email:''});
  const [error, setError] = useState('');
  const LoginOne = details => {console.log(details)};
  const Logout = () => {console.log('Logout')}
  return (
    <div className="relative pb-10 min-h-screen">
      
      <Router>
        <Header user={user.name}/>
        <div className={'mt-14'}>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path ='/about'>
              <About/>
            </Route>
            <Route path ='/contact'>
              <Contact/>
            </Route>
            <Route path ='/products/:id'>
              <Product/>
            </Route>
            <Route path = '/login'>
              <Login/>
            </Route>
            <Route path = '/register'>
              <Register/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
