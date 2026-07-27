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
import { useState } from "react";
import { cardItem } from "../lib/types/search";


function App() {
  const location = useLocation();
  const cardJson: string | null = localStorage.getItem("cardData");
  const currentCard = cardJson ? JSON.parse(cardJson) : []
  const [cardItems, setCardItems] = useState<cardItem[]>(currentCard);

  // Handlers: 
  const onAdd = (input: cardItem) => {
    const exist: any = cardItems.find((item: cardItem) => item._id === input._id);
    if (exist) {
      const cardUpdate = cardItems.map((item: cardItem) =>
        item._id === input._id
          ? { ...exist, quantity: exist.quantity + 1 }
          : item
      );
      setCardItems(cardUpdate);
      localStorage.setItem("cardData", JSON.stringify(cardUpdate));
    }
    else {
      const cardUpdate = [...cardItems, { ...input }];
      setCardItems(cardUpdate);
      localStorage.setItem("cardData", JSON.stringify(cardUpdate));
    }
  }

  return (
    <>
      {location.pathname === "/" ? <HomeNavbar cardItems={cardItems} /> : <OtherNavbar cardItems={cardItems} />}

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
    </>
  );
}

export default App;





