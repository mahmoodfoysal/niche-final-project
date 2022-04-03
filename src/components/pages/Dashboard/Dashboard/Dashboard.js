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
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/addProducts`}>
                            <AddProducts></AddProducts>
                        </Route>
                        <Route path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                        <Route path={`${path}/pendingOrder`}>
                            <PendingOrder></PendingOrder>
                        </Route>
                        <Route path={`${path}/approvedOrder`}>
                            <ApprovedOrder></ApprovedOrder>
                        </Route>
                        <Route path={`${path}/shippedOrder`}>
                            <ShippedOrder></ShippedOrder>
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