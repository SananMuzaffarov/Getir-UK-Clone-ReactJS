import React from "react";
import HomePage from "./HomePage";
import Features from "./Features";
import Order from "./Order";
import Product from "./Products";
import Delivery from "./Delivery";

const Home = () => {
    return(
        <div>
            <HomePage />
            <Features />
            <Order />
            <Product />
            <Delivery />
        </div>
    );
}
export default Home;