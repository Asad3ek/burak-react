import React from "react";
import { Container } from "@mui/material";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertiesment from "./Advertiesment";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";


export default function HomePage() {
  return (
    <div className="homePage">
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertiesment />
      <ActiveUsers />
      <Events />
    </div>
  )
}