import { Link } from 'react-router-dom';
import '../styles/index.scss';
import aboutImage from '../assets/about/about';
import illustration  from '../assets/shared/allsvg';

function OurContent(){
    return (
        <>
        <div className='ourContent-container'>
            <section className='card'>
                <div className='hero-image'>
                <picture>
                    <source media="(min-width: 992px)" srcSet={aboutImage.image_about_hero_desktop}/>
                    <source media="(min-width: 600px)" srcSet={aboutImage.image_about_hero_tablet}/>
                    <img src={aboutImage.image_about_hero_mobile} alt='hero-mobile'/>
                </picture>
                </div>
                <figcaption>
                    <h1>About Us</h1>
                    <p>Founded in 2010, we are a creative agency that producers lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We've alawys looking fowards to creating brandsm products, and digital experiences that connect with out client's audiences.</p>
                </figcaption>                
            </section>

            <section className='card'>
                <div className='hero-image'>
                 <picture>
                    <source media="(min-width: 992px)" srcSet={aboutImage.image_world_class_desktop}/>
                    <source media="(min-width: 600px)" srcSet={aboutImage.image_world_class_tablet}/>
                    <img src={aboutImage.image_world_class_mobile} alt='world-class-mobile'/>
                </picture>
                </div>
                <figcaption>
                    <h1>World-class talent</h1>
                    <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
                    <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
                </figcaption>                
            </section>

            <div className='illus-container'>
                <div className='illus-content'>
                    <div className='illus-image'>
                    <img src={illustration.illustration_canada} alt='Canada'/>
                    </div>
                    
                    <div className='illus-info'>
                    <h3>CANADA</h3>
                    <Link to='/Locations'><button>SEE LOCATION</button></Link>
                    </div>
                </div>

                <div className='illus-content'>
                    <div className='illus-image'>
                    <img src={illustration.illustration_australia} alt='Australia'/>
                    </div>
                    
                    <div className='illus-info'>
                    <h3>AUSTRALIA</h3>
                    <Link to='/Locations'><button>SEE LOCATION</button></Link>
                    </div>
                </div>

                <div className='illus-content'>
                    <div className='illus-image'>
                    <img src={illustration.illustration_united_kingdom} alt='United Kingdom'/>
                    </div>
                    
                    <div className='illus-info'>
                    <h3>UNITED KINGDOM</h3>
                    <Link to='/Locations'><button>SEE LOCATION</button></Link>
                    </div>
                </div>
            </div>

            <section className='card'>
                <div className='hero-image'>
                <picture>
                    <source media="(min-width: 992px)" srcSet={aboutImage.image_real_deal_desktop}/>
                    <source media="(min-width: 600px)" srcSet={aboutImage.image_real_deal_tablet}/>
                    <img src={aboutImage.image_real_deal_mobile} alt='real'/>
                </picture>
                </div>
                <figcaption>
                    <h1>The real deal</h1>
                    <p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. 
                    We make design and technology more accessible and give you tools to measure success.</p>
                    <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
                </figcaption> 
            </section>
        </div>
        </>
    )
}

export default OurContent;