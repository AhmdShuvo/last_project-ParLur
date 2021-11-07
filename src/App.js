import Home from './Components/Home/Home';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';


function App() {
  return (
   <BrowserRouter>
   <Header></Header>
   <Routes>
     <Route  path="/home" element={<Home></Home>} />
     <Route  path="/login" element={<Login></Login>} />
      

     
   </Routes>
   </BrowserRouter>
  );
}

export default App;
