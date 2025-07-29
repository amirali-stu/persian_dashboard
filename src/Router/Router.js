import Comments from "../Pages/Comments";
import Discount from "../Pages/Discounts";
import Home from "../Pages/Home";
import Orders from "../Pages/Orders";
import Products from "../Pages/Products";
import Users from "../Pages/Users";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <Users /> },
  { path: "/products", element: <Products /> },
  { path: "/orders", element: <Orders /> },
  { path: "/discounts", element: <Discount /> },
  { path: "/comments", element: <Comments /> },
];

export default routes;
