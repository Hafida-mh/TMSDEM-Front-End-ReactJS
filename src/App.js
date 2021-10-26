import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import NavBar from './components/navBar/NavBar'
import Presentation from './components/Présentation'
import Service from './components/Service'
import Footer from './components/footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
   <Router> 
<Switch>
    <div className="App">
      
     <Route exact path="/">  <Home /> </Route>
     <Route path="/nav"> <NavBar /></Route>
<Route path="/presentation"> <Presentation /></Route>
    <Route path="/service" > <Service /> </Route>
    <Route path="/footer"> <Footer /></Route>
    </div>
    </Switch>
    </Router>


  );
}

export default App;
