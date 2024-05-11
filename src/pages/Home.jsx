//import Banner from "../components/Banner";
import { useLoaderData } from 'react-router-dom';
import Carousel from "../components/Carousel";
import LogoSlider from "../components/LogoSlider";
import PopularService from "../components/PopularService";

const Home = () => {

    const services = useLoaderData()
    console.log(services)
    return (
        <div>
            <h2>Home</h2>
            <Carousel />
            {/* <Banner /> */}
            <LogoSlider />

            <div>
                {
                    services.map(service => <PopularService key={service._id} service={service}></PopularService>)
                }
            </div>
        </div>
    );
};

export default Home;