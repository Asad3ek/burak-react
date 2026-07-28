import { Switch, Route, useLocation } from "react-router-dom";
import HomePage from "./screens/homePage";
import ProductsPage from "./screens/productsPage";
import UserPage from "./screens/userPage";
import OrdersPage from "./screens/ordersPage";
import HomeNavbar from "./components/header/HomeNavbar";
import OtherNavbar from "./components/header/OtherNavbar";
import Footer from "./components/footer";
import HelpPage from "./screens/helpPage";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/home.css"
import Test from "./screens/Test";
import useBasket from "./components/hooks/useBasket";
import { useState } from "react";
import AuthenticationModal from "./components/auth";




function App() {
  const location = useLocation();
  const { cardItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket()
  const [signupOpen, setSignUpOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);

  /** HANDLERS **/

  const handleSignUpClose = () => setSignUpOpen(false);
  const handleLoginClose = () => setLoginOpen(false);

  return (
    <>
      {location.pathname === "/"
        ? <HomeNavbar
          cardItems={cardItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
        : <OtherNavbar
          cardItems={cardItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />}

      <Switch>
        <Route path="/products">
          <ProductsPage onAdd={onAdd} />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />

      <AuthenticationModal
        signupOpen={signupOpen}
        loginOpen={loginOpen}
        handleSignupClose={handleSignUpClose}
        handleLoginClose={handleLoginClose}
      />
    </>
  );
}

export default App;





