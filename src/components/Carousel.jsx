import background from '../assets/Photo.png'

const Carousel = () => {
    return (
        <div>
            <div className="flex">
                <div className="hero min-h-96 bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-lg">
                            <h1 className="text-5xl font-bold">Our Medical Team is
                                Ready to Help You.</h1>
                            {/* <p className="py-6">BOOK AN APPOINTMENT</p> */}
                            <div className="flex items-center justify-evenly gap-5 px-auto">
                                <button className="btn mt-7 bg-[#0152A8] text-white">Book an Appointment</button>
                                <h2 className="mt-6">(OR)</h2>
                                <button className="btn mt-7 bg-[#0FE3AF] text-black">Call: 1-800-123-9999</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="hero min-h-96" style={{ backgroundImage: `url(${background})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;