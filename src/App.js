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
import Login from './Views/Login'



function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      
      <Router>
        <Header/>
        <div className={'p-3 mt-12'}>
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
          </Switch>
        </div>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
