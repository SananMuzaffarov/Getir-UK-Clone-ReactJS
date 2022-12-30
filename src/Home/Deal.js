import React from "react";
import dealPhoto from '../Assets/deal.webp';

const Deal = () => {
    return(
        <div className="deal">
            <img alt="dealPhoto" src={dealPhoto} />
            <div className="deal-wrapper">
                <h4>The best deals and promotions</h4>
                <p>We know you love a good deal. Get exclusive offers on your favourite products and be delighted with the price.</p>
            </div>
        </div>
    );
}
export default Deal;