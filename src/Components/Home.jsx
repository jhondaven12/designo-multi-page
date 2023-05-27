import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/index.scss';
import phoneImage from '../assets/home/desktop/image-hero-phone.png';
import homeImage from '../assets/home/allHomeImage';

const useScrollTop = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0});
    }, [location]);
};

function Home(){

    useScrollTop();

     return (
        <>
        <div className='home-container'>

            <div className='card card-container'>
                <div className="card-info">
                    <h1>Award-winning custom designs and digital branding solutions</h1>
                    <p>With over 10 years in the industry, we are experienced in creating fully
                    responsive websites, app design, and engaging brand experiences. Find out
                    more about our services.</p>
                    <button>LEARN MORE</button>
                </div>
                
                <div className='card-img'>
                    <img src={phoneImage} alt='phoneImage'/>
                </div>
            </div>

            <div className='project-container'>
                <Link to='page/WebDesign' className='web-design'>
                    <div className='overlay'></div>
                    <picture>
                        <source media="(min-width: 1200px)" srcSet={homeImage.web_desktop_design_large}/>
                        <source media="(min-width: 992px)" srcSet={homeImage.web_desktop_design_small}/>
                        <source media="(min-width: 768px)" srcSet={homeImage.web_tablet_design}/>
                        <img src={homeImage.web_mobile_design} alt='web app'/>
                    </picture>
                    <div>
                        <h1>WEB DESIGN</h1>
                        <h3>VIEW PROJECTS <i className='arrow'></i></h3>
                    </div>
                </Link>

                <Link to="page/AppDesign" className='app-design'>
                    <div className='overlay'></div>
                    <picture>
                        <source media="(min-width: 992px)" srcSet={homeImage.app_desktop_design}/>
                        <source media="(min-width: 768px)" srcSet={homeImage.app_tablet_design}/>
                        <img src={homeImage.app_mobile_design} alt='mobile app'/>
                    </picture>
                    <div>
                        <h1>APP DEISGN</h1>
                        <h3>VIEW PROJECTS <i className='arrow'></i></h3>
                    </div>
                </Link>

                <Link to='page/GraphicDesign' className='graphic-design'>
                    <div className='overlay'></div>
                    <picture>
                        <source media="(min-width: 992px)" srcSet={homeImage.graphic_desktop_design}/>
                        <source media="(min-width: 768px)" srcSet={homeImage.graphic_tablet_design}/>
                        <img src={homeImage.graphic_mobile_design} alt='mobile graphic'/>
                    </picture>
                    <div>
                        <h1>GRAPHIC DESIGN</h1>
                        <h3>VIEW PROJECTS <i className='arrow'></i></h3>
                    </div>
                </Link>
            </div>

            <div className='illus-container'>
                <section>
                    <div className='illus-image'>
                        <img src={homeImage.illustration_passionate} alt='passionate'/>
                    </div>
                    
                    <div className='illus-info'>
                        <h1>PASSIONATE</h1>
                        <p>Each project starts with an in-depth brand research to ensure we only create products that server a purpose.
                        We merge art, design, and technology into exciting new solutions.</p>
                    </div>
                </section>
                
                <section>
                    <div className='illus-image'>
                        <img src={homeImage.illustration_resourceful} alt='resourceful'/>
                    </div>

                    <div className='illus-info'>
                        <h1>RESOURCEFUL</h1>
                        <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects.
                        and value customer collaboration. it guarantees superior results that fulfill our clien't needs.</p>
                    </div>
                </section>

                <section>
                    <div className='illus-image'>
                        <img src={homeImage.illustration_friendly} alt='friendly'/>
                    </div>
                    <div className='illus-info'>
                        <h1>FRIENDLY</h1>
                        <p>We are a group of enthusiatic folks who know how to put people first.
                        Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                    </div>
                </section>
            </div>
        </div>
        </>
    )
};

export default Home;