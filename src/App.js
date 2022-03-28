import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/pages/Home/Home/Home';
import Login from './components/pages/Login/Login/Login';
import Navigation from './components/pages/Shared/Navigation/Navigation';
import Registration from './components/pages/Login/Registration/Registration';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Registration></Registration>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
