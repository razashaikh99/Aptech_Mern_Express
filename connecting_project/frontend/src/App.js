import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Main from './Components/Main';
import Register from './Components/Register';
import Login from './Components/Login';
import ShowUser from './Components/ShowUser';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/get" element={<ShowUser />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
