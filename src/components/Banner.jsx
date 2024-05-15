import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/smiling-nutritionist-advises-young-patient-woman-proper-nutrition-dieting.jpg';

const Banner = () => {
    return (
        <div className="mx-20">
            <Carousel className="text-center">
                <div>
                    <img src={img1} />

                </div>
                <div>
                    <img src={img1} />

                </div>
                <div>
                    <img src={img1} />

                </div>
                <div>
                    <img src={img1} />

                </div>
                <div>
                    <img src={img1} />

                </div>
                <div>
                    <img src={img1} />

                </div>
                {/* <div>
                <img src={img2} />

            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />

            </div>
            <div>
                <img src={img5} />

            </div>
            <div>
                <img src={img6} />
            </div> */}
            </Carousel>
        </div>
    );
};

export default Banner;