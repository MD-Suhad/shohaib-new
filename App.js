import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Routes >
          <Route path='/' element={ <Home></Home>}/>
        </Routes>
        <Routes >
          <Route path='/home' element={ <Home></Home>}/>
        </Routes>
        <Routes >
          <Route path='/login' element={ <Login></Login>}/>
        </Routes>
      </Router>
      </AuthProvider>
      
     
    </div> 
  );
}

export default App;
