import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";

import Carts from "../UI/cart/Carts.jsx";
import { useSelector } from "react-redux";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Header />

      {showCart && <Carts />}

      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
