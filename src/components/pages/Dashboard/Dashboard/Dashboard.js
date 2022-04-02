import React from 'react';
import './DashBoard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import AddProducts from '../AddProducts/AddProducts';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Payment from '../Payment/Payment';
import ManageOrders from '../ManageOrders/ManageOrders';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-3 left-column">
                    <h2>Admin Dash Board</h2>
                    <ul>
                        <li>
                            <Link to={`${url}/makeAdmin`}>Add Admin</Link>
                        </li>
                        <li>
                            <Link to={`${url}/manageOrders`}>Manage Orders</Link>
                        </li>
                        <li>
                            <Link to={`${url}/addProducts`}>Add Products</Link>
                        </li>
                        <li>
                            <Link to={`${url}/manageProducts`}>Manage Products</Link>
                        </li>
                        <li>
                            <Link to={`${url}/payment`}>Payment</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-9">
                    <Switch>
                        <Route exact path={path}>
                            <DashBoardHome></DashBoardHome>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/manageOrders`}>
                            <ManageOrders></ManageOrders>
                        </Route>
                        <Route path={`${path}/addProducts`}>
                            <AddProducts></AddProducts>
                        </Route>
                        <Route path={`${path}/manageProducts`}>
                            <AddProducts></AddProducts>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;