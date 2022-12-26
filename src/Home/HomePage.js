import React from "react";
import logo from '../Assets/logo.webp';
import appstore from '../Assets/appstore.webp';
import playstore from '../Assets/playstore.png';
import mobile from '../Assets/mobile.webp';

const HomePage = () => {
    return(
        <div className="homepage">
            <div className="col col1">
                <div className="logo">
                    <img alt="logo" src={logo} />
                </div>
                <div className="content">
                    <h1>We deliver groceries in minutes</h1>
                    <h3>From iceberg lettuce to ice-cold beer, get what you want (or need) in minutes.</h3>
                    <div className="apps">
                        <img alt="appstore" src={appstore} />
                        <img alt="playstore" src={playstore} id="playstore"/>
                    </div>
                </div>
            </div>
            <div className="col col2">
                <img alt="mobile" src={mobile} />
            </div>
        </div>
    );
}
export default HomePage;