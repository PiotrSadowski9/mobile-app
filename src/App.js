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
import Products from './Views/Products';
import Cart from './Views/Cart'



function App() {

  

  const [user, setUser] = useState({name:'',email:'',password:'',logged:false,cart:[{name:"peach",price:343},{name:"apple",price:444},{name:"orange",price:123},{name:"banana",price:657}]});
  

  return (
    <div className="relative pb-10 min-h-screen">
      
      <Router>
        <Header user={user.logged} setUser={setUser}/>
        <div className={'mt-14 mb-40'}>
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
            <Route exact path='/products'>
              <Products/>
            </Route>
            <Route path ='/products/:id'>
              <Product user={user.cart} setUser={setUser}/>
            </Route>
            <Route path ='/cart'>
              <Cart user={user.cart} setUser={setUser}/>
            </Route>
            <Route path = '/login'>
              <Login user={user} setUser={setUser} />
            </Route>
            <Route path = '/register'>
              <Register Login={user} setLogin={setUser}/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
