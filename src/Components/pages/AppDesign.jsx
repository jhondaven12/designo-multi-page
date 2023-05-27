import { Link } from 'react-router-dom';
import '../../styles/index.scss';
import appImage from '../../assets/app-design/appImage';
import linkImage from '../../assets/home/allHomeImage';


function AppDesign(){
    return (
        <>
        <div className='app-container design-container'>
            <header>
                <h1>App Design</h1>
                <p>Our mobile designs bring inituitive digital solutions to your customers right at thier fingertips.</p>
            </header>

            <div className='content'>
                <div className='card'>
                    <div className='img-container'>
                    <img src={appImage.airfilter} alt='airfilter'/>
                    </div>

                    <figcaption>
                    <h4>AIRFILTER</h4>
                    <p>Solving the problem of poor indoor air quality by filtering the air</p>
                    </figcaption>
                </div>

                <div className='card'>
                    <div className='img-container'>
                    <img src={appImage.eyecam} alt='eyecam'/>
                    </div>

                    <figcaption>
                    <h4>EYECAM</h4>
                    <p>Product that lets you edit your favorite photos and videos of any time</p>
                    </figcaption>
                </div>

                <div className='card'>
                    <div className='img-container'>
                    <img src={appImage.faceit} alt='faceit'/>
                    </div>
                    
                    <figcaption>
                    <h4>FACEIT</h4>
                    <p>Get to meet your favorite internet superstar with the faceit app</p>
                    </figcaption>
                </div>

                <div className='card'>
                    <div className='img-container'>
                    <img src={appImage.todo} alt='todo'/>
                    </div>
                    <figcaption>
                    <h4>TODO</h4>
                    <p>A todo app that features cloud sync with light and dark mode</p>
                    </figcaption>
                </div>

                <div className='card'>
                    <div className='img-container'>
                    <img src={appImage.loopstudios} alt='loopstudios'/>
                    </div>
                    <figcaption>
                    <h4>LOOPSTUDIOS</h4>
                    <p>A VR experience app made for Loopstudios</p>
                    </figcaption>
                </div>
            </div>

            <div className='design-links'>
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
                <Link to="/page/WebDesign">
                    <div className='overlay'></div>
                    <picture>
                        <source media="(min-width: 992px)" srcSet={linkImage.web_desktop_design_small}/>
                        <source media="(min-width: 768px)" srcSet={linkImage.web_tablet_design}/>
                        <img src={linkImage.web_mobile_design} alt='web app'/>
                    </picture>
                    <div>
                        <h1>WEB DESIGN</h1>
                        <h3>VIEW PROJECT <i className='arrow'></i></h3>
                    </div>
                </Link>
            </div>
        </div>
        </>
    );
};

export default AppDesign;