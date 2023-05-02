import { Routes, Route, Navigate } from "react-router-dom";
import Catalog from "./pages/catalog/Catalog";
import Product from "./pages/product/Product";
import Uikit from "./pages/uikit/UiKit";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminHomePage from "./pages/admin/Admin";

import "./App.css";
import OrderPage from "./pages/order/Order";
import Page404 from "./pages/404/404";
import Contacts from "./pages/contacts/contacts";

import ReturnProduct from "./pages/returnProduct/returnProduct";
import AboutCompany from "./pages/aboutCompany/AboutCompany";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/product" element={<Product />} />
        <Route path="/uikit" element={<Uikit />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/returnProduct" element={<ReturnProduct />} />
        <Route path="/aboutCompany" element={<AboutCompany />} />
        {/* Админ панель роуты */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/home" element={<AdminHomePage />} />
        {/* Редирект на 404 */}
        <Route path="*" element={<Navigate to="/404" />} />
        {/* Страница 404 */}
        <Route path="/404" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
