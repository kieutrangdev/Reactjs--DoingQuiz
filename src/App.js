import logo from './logo.svg';
// import './App.scss';
import { Button } from 'bootstrap';
import Header from "./components/Header/Header"
import {Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <Header/>
     <div>
      test link
     </div>
     <button>Go to user page</button>
     <button>Go to admin page</button>
    </div>
  );
}

export default App;
