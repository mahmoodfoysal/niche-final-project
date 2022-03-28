import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/pages/Home/Home/Home';
import Login from './components/pages/Login/Login/Login';
import Navigation from './components/pages/Shared/Navigation/Navigation';
import Registration from './components/pages/Login/Registration/Registration';
import AuthProvider from './components/Context/AuthProvider/AuthProvider';
import Services from './components/pages/Home/Services/Services';
import PrivateRoute from './components/pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
    <AuthProvider>
      <BrowserRouter>
      <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Registration></Registration>
          </Route>

        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
    
  );
}

export default App;
