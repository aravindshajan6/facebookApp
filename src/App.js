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

  const Routing = () => {
    return (
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/privacy"  element={<PrivacyPolicy />} />

        </Routes>
    )
  }

  return (
    <div className="App">
      <BrowserRouter  >
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
