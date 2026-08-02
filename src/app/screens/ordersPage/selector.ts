import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../lib/types/screen";
import OrdersPage from ".";

const selectOrderPage = (state: AppRootState) => state.orderPage;
export const retrivePausedOrders = createSelector(
    selectOrderPage,
    (OrdersPage) => OrdersPage.pausedOrders
);

export const retriveProcessOrders = createSelector(
    selectOrderPage,
    (OrdersPage) => OrdersPage.processOrders
);

export const retriveFinishedOrders = createSelector(
    selectOrderPage,
    (OrdersPage) => OrdersPage.finishedOrders
);