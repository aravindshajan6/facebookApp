import './App.css';
import ReactDOM from "react-dom";

import Login from './Components/Login';
import Home from './Components/Home';
import PrivacyPolicy from './Components/PrivacyPolicy';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <BrowserRouter  >
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/privacy-policy"  element={<PrivacyPolicy />} />

        </Routes>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
