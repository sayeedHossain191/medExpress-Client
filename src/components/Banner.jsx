import Carousel from './Carousel';
import image1 from '../assets/Photo.png'
import image2 from '../assets/Photo (1).png'
import image3 from '../assets/PngItem_1939059 2.png'

const Banner = () => {
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
            {/* <div className="hero" style={{ backgroundImage: `url(${image3})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Doctor Consultation.</h1>
                        <p className="mb-5">Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
                        <button className="btn btn-primary">Consult Now</button>
                    </div>
                </div>
            </div> */}
            {/* <Carousel /> */}
        </div>
    );
};

export default Banner;