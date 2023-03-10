import React from "react";
import HomePage from "./HomePage";
import Features from "./Features";
import Order from "./Order";
import Product from "./Products";
import Delivery from "./Delivery";
import Deal from "./Deal";
import Rate from "./Rate";
import Ready from "./Ready";
import Footer from "./Footer";
import BottomFooter from "./BottomFooter";

const Home = () => {
    return(
        <div>
            <HomePage />
            <Features />
            <Order />
            <Product />
            <Delivery />
            <Deal />
            <Rate />
            <Ready />
            <Footer />
            <BottomFooter />
        </div>
    );
}
export default Home;