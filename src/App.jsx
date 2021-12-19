import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./components/pages/productList/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newProduct/NewProduct";

const App = () => {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/user/:userId">
            <User />
          </Route>
          <Route exact path="/newUser">
            <NewUser />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route exact path="/product/:productId">
            <Product />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route exact path="/newProduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
