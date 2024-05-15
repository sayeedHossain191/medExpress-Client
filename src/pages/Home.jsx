//import Banner from "../components/Banner";
import { Link, useLoaderData } from 'react-router-dom';
import Carousel from "../components/Carousel";
import LogoSlider from "../components/LogoSlider";
import PopularService from "../components/PopularService";
import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';
import Department from '../components/Department';
import Award from '../components/Award';

const Home = () => {

    const services = useLoaderData()
    console.log(services)

    return (
        <div>

            <Helmet>
                <title>
                    MedExpress | Home
                </title>
            </Helmet>

            <div>
                <Banner />
                <Department />
                <Carousel />
                <LogoSlider />
            </div>

            <div className="text-center max-w-lg mx-auto font-poppins">
                <h1 className='text-xl text-[#0152A8] font-semibold mb-5'>SERVICES</h1>
                <h2 className='text-5xl font-semibold'>Our Popular Services</h2>
            </div>

            <div className='my-20 grid lg:grid-cols-2 sm:grid-cols-1 gap-10 mx-20'>
                {
                    services.map(service => <PopularService key={service._id} service={service}></PopularService>)
                }
            </div>

            <div className='flex justify-center my-20'>
                <Link to='/services'><button className="btn btn-wide font-poppins text-lg">Show All</button>
                </Link>
            </div>

            <Award />
        </div>
    );
};

export default Home;