import React from "react";
import erzapPhoto from '../Assets/erzaq.png';
import motorcuPhoto from '../Assets/motorcu.png';
import kuryerPhoto from '../Assets/kuryer.png';

const Features = () => {
    return(
        <div className="features">
            <div className="feature-wrapper">
                <img alt="erzaq" src={erzapPhoto} />
                <h4>Over 1,500 everyday products</h4>
                <p>Shop for snacks, drinks, fresh produce and more from the brands you know and love.</p>
            </div>
            <div className="feature-wrapper">
                <img alt="motorcu" src={motorcuPhoto} />
                <h4>Delivery in minutes</h4>
                <p>No need to book a slot — we deliver your groceries in minutes until your front door.</p>
            </div>
            <div className="feature-wrapper">
                <img alt="kuryer" src={kuryerPhoto} />
                <h4>Absolutely no substitutions</h4>
                <p>We have a real-time inventory, so what you order is what you get. Exactly how it should be.</p>
            </div>
        </div>
    );
}
export default Features;