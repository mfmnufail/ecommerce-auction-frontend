import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "../Components/Account";
import FormBar from "../Components/Forms/FormBar";
import Dashboard from "../Components/Dashboard";
import Lists from "../Components/Lists";
import Orders from "../Components/Orders";


const AppRoute = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/lists" element={<Lists/>} />
      <Route path="/orders" element={<Orders/>} />
      <Route path="/account" element={<Account/>} />
      <Route path="/admin" element={<FormBar/>} />
    </Routes>
  );
};

export default AppRoute;
