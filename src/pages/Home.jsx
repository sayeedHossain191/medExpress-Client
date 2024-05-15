//import Banner from "../components/Banner";
import { useLoaderData } from 'react-router-dom';
//import Carousel from "../components/Carousel";
import LogoSlider from "../components/LogoSlider";
import PopularService from "../components/PopularService";
import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';

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
                {/* <Carousel /> */}
                <Banner />
                <LogoSlider />
            </div>

            <div className='my-20 grid lg:grid-cols-2 sm:grid-cols-1 gap-10 mx-20'>
                {
                    services.map(service => <PopularService key={service._id} service={service}></PopularService>)
                }
            </div>
        </div>
    );
};

export default Home;