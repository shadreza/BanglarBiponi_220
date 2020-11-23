import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import MobilePage from './MobilesPage';
import LaptopPage from './LaptopPage';
import WatchPage from './WatchPage';
import Checkout from './Checkout';
import Payment from './Payment'; 
import Login from './Login'; 
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import {BrowserRouter as Router , Switch , Route}
from "react-router-dom"
import Footer from './Footer';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import InfoProduct from './InfoProduct';
import Orders from './Orders';

const promise = loadStripe('pk_test_51HpsnaBwkYF7v8zyJv6tUkaZ7oJSK9NR9RooOSHXflogaq7N2JMeUuyfpwGBBqtsFdyhHT118ROqLXF20J5T6Gmq00NPEPBNC9');

function App() {
  const[{},dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            
          </Route> 
          
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route> 

          <Route path="/MobilePage">
            <Header/>
            <MobilePage/>
            <Footer/>
          </Route>

          <Route path="/LaptopPage">
            <Header/>
            <LaptopPage/>
            <Footer/>
          </Route>

          <Route path="/ExtraInfo">
            <Header/>
            <InfoProduct/>
            <Footer/>
          </Route>

          <Route path="/WatchPage">
            <Header/>
            <WatchPage/>
            <Footer/>
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
