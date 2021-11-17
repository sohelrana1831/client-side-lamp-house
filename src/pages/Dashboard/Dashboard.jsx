import React from "react";
import {
  Link,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import AdminRoute from "../../shared/AdminRoute/AdminRoute";
import AuthProvider, { useAuth } from "../../shared/Context/AuthContext";
import Menu from "../../shared/Menu/Menu";
import AddProduct from "./Admin/AddProduct";
import MakeAdmin from "./Admin/MakeAdmin";
import ManageAllOrders from "./Admin/ManageAllOrders";
import ManageProducts from "./Admin/ManageProducts";
import ProductUpdate from "./Admin/ProductUpdate";
import DashboardHome from "./DashboardHome";
import MyOrders from "./MyOrders";
import MyReview from "./MyReview";
import Pay from "./Pay";
import Review from "./Review";

const Dashboard = () => {
  const { admin, logout } = useAuth();
  const { path, url } = useRouteMatch();

  const history = useHistory();
  const handleLogout = async () => {
    try {
      await logout();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Menu />
      <div className="container ">
        <div className="flex">
          <aside className="h-screen top-0 w-1/6">
            <div className="">
              <ul>
                <li className="flex items-center py-2">
                  <Link to={`${url}`}>
                    <i
                      className="fas fa-home text-1xl pr-2"
                      title="Dashboard"
                    ></i>
                    <span className="hidden lg:inline-block">Dashboard</span>
                  </Link>
                </li>

                {admin ? (
                  <>
                    <li className="flex items-center py-2">
                      <Link to={`${url}/manage-all-orders`}>
                        <i
                          className="fas fa-list  text-1xl pr-2"
                          title="Manage Orders"
                        ></i>
                        <span className="hidden lg:inline-block">
                          Manage All Orders
                        </span>
                      </Link>
                    </li>
                    <li className="flex items-center py-2">
                      <Link to={`${url}/add-product`}>
                        <i
                          className="fas fa-plus  text-1xl pr-2"
                          title="Add Product"
                        ></i>
                        <span className="hidden lg:inline-block">
                          Add Product
                        </span>
                      </Link>
                    </li>
                    <li className="flex items-center py-2">
                      <Link to={`${url}/manage-products`}>
                        <i
                          className="fab fa-product-hunt  text-1xl pr-2"
                          title="Manage Products"
                        ></i>
                        <span className="hidden lg:inline-block">
                          Manage Products
                        </span>
                      </Link>
                    </li>
                    <li className="flex items-center py-2">
                      <Link to={`${url}/make-admin`}>
                        <i
                          className="fas fa-user-shield  text-1xl pr-2"
                          title="Make Admin"
                        ></i>
                        <span className="hidden lg:inline-block">
                          Make Admin
                        </span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center py-2">
                      <Link to={`${url}/my-orders/`}>
                        <i
                          className="fas fa-shopping-cart  text-1xl pr-2"
                          title="My Orders"
                        ></i>
                        <span className="hidden lg:inline-block">
                          My Orders
                        </span>
                      </Link>
                    </li>
                    <li className="flex items-center py-2">
                      <Link to={`${url}/my-review`}>
                        <i
                          className="fas fa-star  text-1xl pr-2"
                          title="My Review"
                        ></i>
                        <span className="hidden lg:inline-block">
                          My Review
                        </span>
                      </Link>
                    </li>
                    <li className="flex items-center py-2">
                      <Link to={`${url}/add-review`}>
                        <i
                          className="fas fa-plus text-1xl pr-2"
                          title="Add Review"
                        ></i>
                        <span className="hidden lg:inline-block">
                          Add Review
                        </span>
                      </Link>
                    </li>
                    <li className="flex items-center py-2">
                      <Link to={`${url}/pay`}>
                        <i
                          className="fab fa-cc-amazon-pay text-1xl pr-2"
                          title="pay"
                        ></i>
                        <span className="hidden lg:inline-block">Pay</span>
                      </Link>
                    </li>
                  </>
                )}

                <li className="flex items-center text-red-400 font-bold hover:border-gray-900 py-2 border-t-2 border-gray-700">
                  <Link to="#" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt text-1xl pr-2"></i>
                    <span className="hidden lg:inline-block">Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          <main className="bg-gray-100 w-5/6 mb-16">
            <AuthProvider>
              <Switch>
                <Route exact path={path}>
                  <DashboardHome />
                </Route>
                <Route path={`${path}/my-orders`}>
                  <MyOrders />
                </Route>
                <Route path={`${path}/add-review`}>
                  <Review />
                </Route>
                <Route path={`${path}/my-review`}>
                  <MyReview />
                </Route>
                <Route path={`${path}/pay`}>
                  <Pay />
                </Route>

                {/* Admin Route start */}

                <AdminRoute path={`${path}/make-admin`}>
                  <MakeAdmin />
                </AdminRoute>
                <AdminRoute path={`${path}/add-product`}>
                  <AddProduct />
                </AdminRoute>
                <AdminRoute path={`${path}/manage-products`}>
                  <ManageProducts />
                </AdminRoute>
                <AdminRoute path={`${path}/update-product/:id`}>
                  <ProductUpdate />
                </AdminRoute>
                <AdminRoute path={`${path}/manage-all-orders`}>
                  <ManageAllOrders />
                </AdminRoute>

                {/* Admin Route end */}
              </Switch>
            </AuthProvider>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
