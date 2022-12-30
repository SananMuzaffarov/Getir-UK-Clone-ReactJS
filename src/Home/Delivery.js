import React from "react";
import deliveryPhoto from '../Assets/delivery.webp';

const Delivery = () => {
    return(
        <div className="delivery">
            <img alt="deliveryPhoto" src={deliveryPhoto} />
            <div className="delivery-wrapper">
                <h4>Delivery whenever you need it</h4>
                <p>We deliver from 08:00 in the morning till 12:00 at night. Check the app to see if we deliver to you!</p>
            </div>
        </div>
    );
}
export default Delivery;