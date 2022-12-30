import React from "react";
import ratePhoto from '../Assets/rate.webp';

const Rate = () => {
    return(
        <div className="rate">
            <img alt="ratePhoto" src={ratePhoto} />
            <div className="rate-wrapper">
                <h4>Rate your experience</h4>
                <p>Give us a star rating and add a comment too. We love hearing what you think is good and what we could do better to improve our service in the future.</p>
            </div>
        </div>
    );
}
export default Rate;