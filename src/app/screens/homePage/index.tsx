import React, { useEffect } from "react";
import { Container } from "@mui/material";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertiesment from "./Advertiesment";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css"

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPopularDishes } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});



export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  //SELECTOR: Store => Data


  useEffect(() => {
    //Backend Server data request => Data
    const product = new ProductService();
    product.getProducts({
      page: 1,
      limit: 4,
      order: "productViews",
      productCollection: ProductCollection.DISH,
    }).then((data) => {
      console.log("data Passed here: ", data);
      setPopularDishes(data);
    })
      .catch(
        (err) => console.log("ERROR: data", err)
      );

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