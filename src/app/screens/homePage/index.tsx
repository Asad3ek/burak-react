import React, { useEffect } from "react";
import { Container } from "@mui/material";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertiesment from "./Advertiesment";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css"

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes, setTopUsers } from "./slice";
import { retrivePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { Member } from "../../../lib/types/member";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

const popularDishesRetriver = createSelector(
  retrivePopularDishes,
  (popularDishes) => ({ popularDishes })
);


export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriver)
  //SELECTOR: Store => Data


  useEffect(() => {
    //Backend Server data request => Data
    const result = [
      {
        _id: "6a39089fd3e1a0fce84473e8",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "Besh Barmoq ",
        productPrice: 16,
        productLeftCount: 50,
        productSize: "NORMAL",
        productVolume: 1,
        productDesc: "This is the most delicious Uzbek Traditional Food.",
        productImages: [
          "uploads/products/a8d4f1e7-63de-4671-8118-6e1113818e20.png",
          "uploads/products/d46913a4-e0cb-4557-af77-2f77e2f02e6b.jpeg"
        ],
        createdAt: "2026-06-22T10:04:15.481Z",
        updatedAt: "2026-06-22T10:04:15.481Z",
        __v: 0,
        productViews: 0
      },
      {
        "_id": "6a36bcafdb8f1be33a8699c9",
        "productStatus": "PROCESS",
        "productCollection": "DISH",
        "productName": "Tandir Go'sht",
        "productPrice": 17,
        "productLeftCount": 120,
        "productSize": "LARGE",
        "productVolume": 1,
        "productDesc": "Most delecios food ",
        "productImages": [
          "uploads/products/29f9ebdb-c77d-4a83-bc37-f34066939a7e.jpeg",
          "uploads/products/8b5b22ad-1d4d-4c54-bd7a-e418dc23b832.jpg"
        ],
        "createdAt": "2026-06-20T16:15:43.082Z",
        "updatedAt": "2026-07-09T08:17:38.387Z",
        "__v": 0,
        "productViews": 0
      }
    ]
    //SLICE: Data => Store 
    //@ts-ignore
    setPopularDishes(result);

  }, []);

  console.log("popularDishes", popularDishes)

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