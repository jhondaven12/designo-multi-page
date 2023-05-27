import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import '../styles/index.scss';
import Footer from './Footer';
import darkLogo from '../assets/shared/desktop/logo-dark.png';
import hamburger from '../assets/shared/mobile/icon-hamburger.svg';
import closeIcon from '../assets/shared/mobile/icon-close.svg';


function Header(){
    const [sideNav, setSideNav] = useState(true);

    const handleSideNav = () => {
        setSideNav(!sideNav);
    }

    useEffect(() => {
       if(!sideNav){
        document.body.style.overflowY = 'hidden';
       } else {
        document.body.style.overflowY = 'scroll';
       }
    })

    return (
        <>
        <header>
            <nav>
                <div className='logo'>
                    <Link to="/"><img src={darkLogo} alt='darklogo'/></Link>
                </div>

               {/*Desktop Navigation Bar*/}
               <div className='desktop-navlist'>
                    <ul>
                        <li><Link to="/OurContent">OUR CONTENT</Link></li>
                        <li><Link to="/Locations">LOCATIONS</Link></li>
                        <li><Link to="/Contact">CONTACT</Link></li>
                    </ul>
               </div>
                
                {/*Mobile and Tablet Sive Navigation Bar*/}
                <div className='icons'>
                    <button onClick={() => handleSideNav()}>
                        <img src={!sideNav ? closeIcon : hamburger} alt='icon-btn'/>
                    </button>
                </div>

                <div className='mobile-navlist' style={!sideNav ? {width: '100%'} : {width: '0%'}}>
                    <ul>
                        <li><Link to="/OurContent">OUR CONTENT</Link></li>
                        <li><Link to="/Locations">LOCATIONS</Link></li>
                        <li><Link to="/Contact">CONTACT</Link></li>
                    </ul>
                </div>

            </nav>
        </header>

        <div id="overlay" style={!sideNav ? {display: 'block'} : {display: 'none'}}></div>

        <Suspense fallback={<h1>Loading...</h1>}>
            <main>
                <Outlet/>
            </main>
        </Suspense>
        <Footer/>
        </>
    )
};

export default Header;

