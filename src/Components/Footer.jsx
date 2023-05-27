import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import '../styles/index.scss';
import allsvg from "../assets/shared/allsvg";
import lightlogo from '../assets/shared/desktop/logo-light.png';


const useScrollTop = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0});
    }, [location]);
};

function Footer(){

    useScrollTop();
    const location = useLocation();

    return (
        <>
        <footer className="footer footer-container">
            <div className="foot-head" style={location.pathname !== '/Contact' ? {display: 'grid'} : {display: 'none'} }>
                <div>
                    <h1>Let's talk about you project</h1>
                    <p>Ready to take it to the next level? Contact us today and find out how out expertise can help your bussiness grow.</p>
                </div>

                <div className="foot-btn">
                    <button>GET IN TOUCH</button>
                </div>
            </div>

            <div className="foot-nav">
                <nav>
                    <div className="logo">
                        <Link to="/"><img src={lightlogo} alt="lightlogo"/></Link>
                    </div>
                    
                    <hr/>
                    
                    <div className="footer-navlist">
                        <Link to="/OurContent">OUR CONTENT</Link>
                        <Link to="/Locations">LOCATIONS</Link>
                        <Link to="/Contact">CONTACT</Link>
                    </div>
                </nav>
            </div>

            <address>
                <div className="address">
                    <p><strong>Designo Central Office</strong></p>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3j5</p>
                </div>
                <div className="address">
                    <p><strong>Contact Us &#10088;Central Office&#10089;</strong></p>
                    <p>P: +1253-863-8967</p>
                    <p>M: contact@designo.co</p>
                </div>
                <div className="foot-icon">
                    <a href="https://www.facebook.com/"><img src={allsvg.icon_facebook}  alt="facebook"/></a>
                    <a href="https://www.youtube.com/"><img src={allsvg.icon_youtube}   alt="youtube"/></a>
                    <a href="https://twitter.com/"><img src={allsvg.icon_twitter}   alt="twitter"/></a>
                    <a href="https://www.pinterest.ph/"><img src={allsvg.icon_pinterest} alt="pinterest"/></a>
                    <a href="https://www.instagram.com/"><img src={allsvg.icon_instagram} alt="instragram"/></a>
                </div>
            </address>
        </footer>
        </>
    );
};

export default Footer;