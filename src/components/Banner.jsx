import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/smiling-nutritionist-advises-young-patient-woman-proper-nutrition-dieting.jpg';
import img2 from '../assets/doctor-showing-prescription-teammate.jpg';
import img3 from '../assets/dentist-wearing-dental-loupe-binoculars-treating-female-patient.jpg';
import img4 from '../assets/close-up-doctor-with-pills-fresh-fruits.jpg';
import img5 from '../assets/national-cancer-institute-NFvdKIhxYlU-unsplash.jpg';
import img6 from '../assets/world-diabetes-day-docter-holding-stethoscope-red-heart-wooden-shape.jpg';

const Banner = () => {
    return (
        <div className="mx-20">
            <Carousel className="text-center">
                <div>
                    <img src={img1} />

                </div>
                <div>
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

                </div>

            </Carousel>
        </div>
    );
};

export default Banner;