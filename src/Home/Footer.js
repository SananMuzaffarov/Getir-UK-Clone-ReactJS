import React from "react";
import getirLogo from '../Assets/getirLogo2.png';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-logo">
                        <img alt="logo" src={getirLogo} />
                    </div>
                    <div className="social-medias">
                        <h4>Follow Us</h4>
                        <ul>
                            <li><a href="/"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="/"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="/"><i class="fa-brands fa-facebook"></i></a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Newsroom</h4>
                        <a href="/">Press Releases</a>
                        <a href="/">Images</a>
                    </div>
                    <div className="footer-links">
                        <h4>Need Help?</h4>
                        <a href="/">FAQs</a>
                        <a href="/">Contact Us</a>
                    </div>
                    <div className="footer-links">
                        <h4>Join the future</h4>
                        <a href="/">Join the team</a>
                        <a href="/">Join us as a rider</a>
                        <a href="/">Technology Careers</a>
                        <a href="/">Enquire about a Getir franchise</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;