import '../styles/index.scss';
import mapImage from '../assets/locations/mapImage';

function Locations(){
    return (
        <div className='locationContainer'>
            <div className='map'>

                <div className='map-img'>
                    <picture>
                        <source media="(min-width: 600px)" srcSet={mapImage.canada_tablet_map}/>
                        <img src={mapImage.canada_dekstop_map} alt='canada'/>
                    </picture>
                </div>


                <div className='map-info'>
                    <h1>Canada</h1>

                    <div className='location'>
                        <div>
                        <p>Designo Central Office</p>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                        </div>

                        <div>
                        <p>Contact</p>
                        <p>P: +1253-863-8967</p>
                        <p>M: contact@desino.co</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='map'>

                <div className='map-img'>
                    <picture>
                        <source media="(min-width: 600px)" srcSet={mapImage.australia_tablet_map}/>
                        <img src={mapImage.australia_dekstop_map} alt='australia'/>
                    </picture>
                </div>

                <div className='map-info'>
                    <h1>Australia</h1>

                    <div className='location'>
                        <div>
                        <p>Designo AU Office</p>
                        <p>19 Balonne Street</p>
                        <p>New South Wales 2443</p>
                        </div>

                        <div>
                        <p>Contact</p>
                        <p>P : &#10088;02&#10089; 6720 9092</p>
                        <p>M: contact@desino.au</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='map'>

                <div className='map-img'>
                    <picture>
                        <source media="(min-width: 600px)" srcSet={mapImage.uk_tablet_map}/>
                        <img src={mapImage.uk_desktop_map} alt='United Kingdom'/>
                    </picture>
                </div>

                <div className='map-info'>
                     <h1>United Kingdom</h1>

                    <div className='location'>
                        <div>
                        <p>Designo UK Office</p>
                        <p>13 Colorado Way</p>
                        <p>Rhyd-y-fro SA8 9GA</p>
                        </div>

                        <div>
                        <p>Contact</p>
                        <p>P : 078 3115 1400</p>
                        <p>M: contact@desino.uk</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Locations;

