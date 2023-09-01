import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
