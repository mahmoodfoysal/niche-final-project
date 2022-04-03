import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/pages/Home/Home/Home';
import Login from './components/pages/Login/Login/Login';
import Navigation from './components/pages/Shared/Navigation/Navigation';
import Registration from './components/pages/Login/Registration/Registration';
import AuthProvider from './components/Context/AuthProvider/AuthProvider';
import PrivateRoute from './components/pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/pages/Dashboard/Dashboard/Dashboard';
import Products from './components/pages/Home/Products/Products';
import HomeProducts from './components/pages/Home/Products/HomeProducts';
import ProductDetails from './components/pages/ProductDetails/ProductDetails';
import OrderProduct from './components/pages/OrderProduct/OrderProduct';
import CustomerOrders from './components/pages/CustomerDashboard/CustomerOrders/CustomerOrders';
import Footer from './components/pages/Shared/Footer/Footer';
import AdminRoute from './components/pages/Login/AdminRoute/AdminRoute';
import NotFound from './components/pages/NotFound/NotFound';

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
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/customerOrder">
            <CustomerOrders></CustomerOrders>
          </Route>
          <Route path="/product/:id">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/homeProducts">
            <HomeProducts></HomeProducts>
          </Route>
          <AdminRoute path="/dashBoard">
            <Dashboard></Dashboard>
          </AdminRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/orderProduct/:id">
            <OrderProduct></OrderProduct>
          </PrivateRoute>
          <Route path="/register">
            <Registration></Registration>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
    
  );
}

export default App;
