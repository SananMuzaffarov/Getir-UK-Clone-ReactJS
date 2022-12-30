import React from "react";
import smallPhone from '../Assets/smallPhone.webp';
import appstore from '../Assets/appstore.webp';
import playstore from '../Assets/playstore.png';

const Ready = () => {
    return(
        <div className="ready">
            <div className="ready-content">
                <h2>Ready to order?</h2>
                <p>Get your grocery shopping delivered in minutes. Download Getir today. See you soon!</p>
                    <div className="apps">
                        <img alt="appstore" src={appstore} />
                        <img alt="playstore" src={playstore} id="playstore"/>
                    </div>
                </div>
            <div className="ready-col phone">
                <img alt="mobile" src={smallPhone} />
            </div>
        </div>
    );
}
export default Ready;