
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from './Home';
import Product from './Product';
import Fixprd from './Fixprd';
import Login from './Login';


function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="" element={<Home />}>
          <Route path="/product" element={<Product />} >
          
          </Route>
          <Route path="/fix" >
              <Route path=':prdID'  element={<Fixprd />} />
          </Route>
          
        </Route>
        <Route path='/login'  element={<Login />} />
      </Routes>
    </Provider>
  </BrowserRouter>
  );
}

export default App;
