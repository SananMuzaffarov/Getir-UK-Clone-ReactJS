import React from "react";
import orderPhoto from '../Assets/orderTelephone.webp';

const Order = () => {
    return(
        <div className="order">
            <img alt="orderPhoto" src={orderPhoto} />
            <div className="order-wrapper">
                <h4>Order now, enjoy in minutes</h4>
                <p>Life is hectic. We deliver groceries in minutes so that you can spend more time doing the things you love.</p>
            </div>
        </div>
    );
}
export default Order;