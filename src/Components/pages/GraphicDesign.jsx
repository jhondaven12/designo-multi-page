import { Link } from 'react-router-dom';
import '../../styles/index.scss';
import graphicImage from '../../assets/graphic-design/graphicImage';
import linkImage from '../../assets/home/allHomeImage';

function GraphicDesign() {
    return (
        <>
        <div className='graphic-container design-container'>
            <header>
                <h1>Graphic Design</h1>
                <p>We deliver eye-cathing branding materials that are tailored to meet your business objectives.</p>
            </header>
            
            <div className='content'>
                <div className='card'>
                   <div className='img-container'>
                        <img src={graphicImage.change} alt='change'/>
                   </div>
                    <figcaption>
                        <h4>TIM BROWN</h4>
                        <p>A book cover designed for Tim Brown's new release, 'Change'</p>
                     </figcaption>
                </div>

                <div className='card'>
                    <div className='img-container'>
                        <img src={graphicImage.boxed_water} alt='boxed water'/>
                    </div>
                    <figcaption>
                        <h4>BOXED WATER</h4>
                        <p>A simple packaging concept made for Boxed Water</p>
                     </figcaption>
                </div>

                <div className='card'>
                    <div className='img-container'>
                        <img src={graphicImage.image_science} alt='iamge science'/>
                    </div>
                    <figcaption>
                        <h4>SCIENCE!</h4>
                        <p>A poster made in collaboration with the Federal Art Project</p>
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
    )
}

export default GraphicDesign;
