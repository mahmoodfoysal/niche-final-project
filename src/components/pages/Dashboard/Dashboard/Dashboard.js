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
import ManageProducts from '../ManageProducts/ManageProducts';
import PendingOrder from '../ManageOrders/PendingOrder';
import ApprovedOrder from '../ManageOrders/ApprovedOrder';
import ShippedOrder from '../ManageOrders/ShippedOrder';
import DeleveredOrder from '../ManageOrders/DeleveredOrde';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-3 left-column">
                    <h2>Admin Dash Board</h2>
                    <ul>
                        <li>
                            <Link className='li-decoration' to={`${url}/dashboardHome`}>Home</Link>
                        </li>
                        <li>
                            <Link className='li-decoration' to={`${url}/makeAdmin`}>Add Admin</Link>
                        </li>
                        <li>
                            <Link className='li-decoration' to={`${url}/addProducts`}>Add Products</Link>
                        </li>
                        <li>
                            <Link className='li-decoration' to={`${url}/manageProducts`}>Manage Products</Link>
                        </li>
                        </ul>
                        <h6>Manage Orders</h6>
                        <ul>
                            <hr />
                        <li>
                            <Link className='li-decoration' to={`${url}/pendingOrder`}>Pending Order</Link>
                        </li>
                        <li>
                            <Link className='li-decoration' to={`${url}/approvedOrder`}>Approved Orders</Link>
                        </li>
                        <li>
                            <Link className='li-decoration' to={`${url}/shippedOrder`}>Shipped Orders</Link>
                        </li>
                        <li>
                            <Link className='li-decoration' to={`${url}/deleveredOrder`}>Delevered Orders</Link>
                        </li>
                        <li>
                            <Link className='li-decoration' to={`${url}/payment`}>Payment</Link>
                        </li>
                        </ul>
                    
                </div>
                <div className="col-md-9">
                    <Switch>

                        <Route exact path={path}>
                            <DashBoardHome></DashBoardHome>
                        </Route>
                        <Route path={`${path}/dashboardHome`}>
                        <DashBoardHome></DashBoardHome>
                        </Route>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProducts`}>
                            <AddProducts></AddProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/pendingOrder`}>
                            <PendingOrder></PendingOrder>
                        </AdminRoute>
                        <AdminRoute path={`${path}/approvedOrder`}>
                            <ApprovedOrder></ApprovedOrder>
                        </AdminRoute>
                        <AdminRoute path={`${path}/shippedOrder`}>
                            <ShippedOrder></ShippedOrder>
                        </AdminRoute>
                        <AdminRoute path={`${path}/deleveredOrder`}>
                            <DeleveredOrder></DeleveredOrder>
                        </AdminRoute>

                        <AdminRoute path={`${path}/payment`}>
                            <Payment></Payment>
                        </AdminRoute>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;