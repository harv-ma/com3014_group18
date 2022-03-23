import './App.scss';
import Router from "./routers/Router"
import Nav from "./components/system-ui/Nav/Nav"
import { BrowserRouter } from "react-router-dom"


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
