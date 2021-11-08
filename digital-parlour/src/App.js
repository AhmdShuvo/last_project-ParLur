import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import Login from './Components/Login/Login';

function App() {
  return (
     
    <BrowserRouter>
    <Header></Header>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/services">
        <Services></Services>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
    </Switch>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
