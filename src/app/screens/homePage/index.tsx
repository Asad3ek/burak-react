import React, { useEffect } from "react";
import { Container } from "@mui/material";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertiesment from "./Advertiesment";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css"


export default function HomePage() {

  //SELECTOR: Store => Data

  useEffect(() => {
    //Backend Server data request => Data

    //SLICE: Data => Store 
  }, []);



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