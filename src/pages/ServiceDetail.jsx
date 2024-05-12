import { useLoaderData } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";

const ServiceDetail = () => {

    const service = useLoaderData();

    const { service_image, service_name, description,
        service_provider_name, service_provider_image, price, service_location, service_provider_detail, specialization } = service;

    return (
        <div>

            <section className="bg-white dark:bg-gray-900 font-poppins">
                <div className="max-w-6xl px-6 py-10 mx-auto">
                    <p className="text-xl font-medium text-blue-500 ">Testimonials</p>

                    <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                        What clients saying
                    </h1>

                    <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                        <div className="absolute w-full bg-[#0152A8] -z-10 md:h-96 rounded-2xl"></div>

                        <div className="w-full p-6 bg-[#0152A8] md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                            <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src={service_provider_image} alt="client photo" />

                            <div className="mt-2 md:mx-6">
                                <div>
                                    <p className="text-xl font-medium tracking-tight text-white">{service_provider_name}</p>
                                    <p className="text-blue-200 ">{specialization}</p>
                                </div>

                                <p className="mt-4 text-lg leading-relaxed text-white md:text-xl"> “{service_provider_detail}”.</p>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center justify-between mt-6 md:justify-start">
                                        <button title="left arrow" className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>

                                        <button title="right arrow" className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="flex items-center pt-4 gap-2">
                                        <FaMapLocationDot className="text-2xl" />
                                        <h2 className="font-semibold">{service_location}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </section>

            <section className="bg-white dark:bg-[#0FE3AF] mx-32 my-20 font-poppins">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src={service_image} alt="" />

                        <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                            <p className="text-5xl font-semibold text-blue-500 ">“</p>

                            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                                {service_name}
                            </h1>

                            <p className="max-w-lg mt-6 text-black">
                                “ {description} ”
                            </p>

                            <div className="flex items-center mt-8 -mx-2">
                                <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-white" src={service_provider_image} alt="" />

                                <div className="mx-2">
                                    <h1 className="text-lg font-medium text-blue-600">{service_provider_name}</h1>
                                    <span className="text-sm text-white">{specialization}</span>
                                </div>
                            </div>

                            <div className="lg:w-full mt-10 overflow-hidden h-20 rounded-lg shadow-lg md:w-64 bg-[#0152A8]">


                                <div className="flex items-center justify-between px-3 py-3 bg-white">
                                    <span className="font-bold text-gray-800">$ {price}</span>
                                    <button className="px-2 py-2 text-xs font-semibold text-black uppercase transition-colors duration-300 transform bg-[#0FE3AF] rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ServiceDetail;