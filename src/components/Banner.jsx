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
        <div className="font-poppins my-20">
            <Carousel className="text-center mx-20">
                <div>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${img1})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-6xl font-bold">Compassion</h1>
                                <p className="mb-5">We understand that seeking medical
                                    care can be a stressful and emotional
                                    experience, and we strive to create a
                                    welcoming and supportive environment
                                    that puts our patients at ease and every
                                    one.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${img2})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-6xl font-bold">Excellence</h1>
                                <p className="mb-5">We are committed to providing excellent
                                    medical care and services to our
                                    patients. We believe in continuously
                                    improving our skills, knowledge, and
                                    resources to ensure that we deliver the
                                    highest quality care possible..</p>

                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${img3})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-6xl font-bold">Integrity</h1>
                                <p className="mb-5">We believe in practicing medicine with
                                    integrity and honesty. We are
                                    transparent in our communication and
                                    decision-making processes, and we
                                    always put our patient's interests first &
                                    provide best solution.</p>

                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${img4})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-6xl font-bold">Respect</h1>
                                <p className="mb-5">We treat all individuals with respect and
                                    dignity, regardless of their background,
                                    beliefs, or circumstances. We believe
                                    that every person deserves to be treated
                                    with compassion and kindness.</p>

                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${img5})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-6xl font-bold">Teamwork</h1>
                                <p className="mb-5">We believe in working collaboratively
                                    with our team membersvand other
                                    healthcare professionals to provide
                                    comprehensive and effective care to our
                                    patients.</p>

                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${img6})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-6xl font-bold">Hello there</h1>
                                <p className="mb-5">Celebrate World Heart Day, on September 29 that is intended to increase public awareness of cardiovascular diseases, including their prevention and their global impact.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    {/* <img src={img6} alt="" /> */}
                </div>

            </Carousel>




        </div>
    );
};

export default Banner;