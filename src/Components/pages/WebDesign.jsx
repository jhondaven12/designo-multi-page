import { Link } from 'react-router-dom';
import '../../styles/index.scss';
import webImage from '../../assets/web-design/webImage';
import linkImage from '../../assets/home/allHomeImage';

function WebDesign(){
    return (
        <>
        <div className='web-container design-container'>
            <header>
                <h1>Web Design</h1>
                <p>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
            </header>

            <div className='content'>
                <div className="card">
                    <div className='img-container'>
                        <img src={webImage.express} alt="express"/>
                    </div>
                    <figcaption>
                        <h4>EXPRESS</h4>
                        <p>A multi-carrier shipping website for ecommerce business</p>
                     </figcaption>
                </div>

                <div className="card">
                    <div className='img-container'>
                        <img src={webImage.transfer} alt="transfer"/>
                    </div>
                    <figcaption>
                        <h4>TRANSFER</h4>
                        <p>Site for low-cost money transfer and sending money within seconds</p>
                     </figcaption>
                </div>

                <div className="card">
                   <div className='img-container'>
                        <img src={webImage.photon} alt="photon"/>
                   </div>
                    <figcaption>
                        <h4>PHOTON</h4>
                        <p>A state-of-the-art music player with high-resolution audio and DSP effects</p>
                     </figcaption>
                </div>

                <div className="card">
                    <div className='img-container'>
                        <img src={webImage.builder} alt="buildere"/>
                    </div>
                    <figcaption>
                        <h4>BUILDER</h4>
                        <p>Connect users with local contractors based on their location</p>
                     </figcaption>
                </div>

                <div className="card">
                    <div className='img-container'>
                            <img src={webImage.blogr} alt="blogr"/>
                    </div>
                    <figcaption>
                        <h4>BLOGR</h4>
                        <p>Blogr is a platform for creating an online blog or publication</p>
                     </figcaption>
                </div>

                <div className="card">
                    <div className='img-container'>
                        <img src={webImage.camp} alt="camp"/>
                    </div>
                    <figcaption>
                        <h4>CAMP</h4>
                        <p>Get expert training in coding, data, design, and digital marketing</p>
                     </figcaption>
                </div>
            </div>

            <div className='design-links'>
                <Link to="/page/AppDesign">
                    <div className='overlay'></div>
                    <picture>
                        <source media="(min-width: 992px)" srcSet={linkImage.app_desktop_design}/>
                        <source media="(min-width: 768px)" srcSet={linkImage.app_tablet_design}/>
                        <img src={linkImage.app_mobile_design} alt='mobile app'/>
                    </picture>
                    <div>
                        <h1>APP DEISGN</h1>
                        <h3>VIEW PROJECT <i className='arrow'></i></h3>
                    </div>
                </Link>
                <Link to="/page/GraphicDesign">
                    <div className='overlay'></div>
                    <picture>
                        <source media="(min-width: 992px)" srcSet={linkImage.graphic_desktop_design}/>
                        <source media="(min-width: 768px)" srcSet={linkImage.graphic_tablet_design}/>
                        <img src={linkImage.graphic_mobile_design} alt='mobile graphic'/>
                    </picture>
                    <div>
                        <h1>GRAPHIC DESIGN</h1>
                        <h3>VIEW PROJECT <i className='arrow'></i></h3>
                    </div>
                </Link>
            </div>
        </div>
        </>
    )
    
};

export default WebDesign;

