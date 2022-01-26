import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";



function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
    </BrowserRouter>
  );
}

   
       

export default App;
