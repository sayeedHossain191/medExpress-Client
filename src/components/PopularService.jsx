// import img1 from '../assets/diet-concept-with-female-scientist-healthy-food.jpg';

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PopularService = ({ service }) => {

    // eslint-disable-next-line react/prop-types
    const { service_image, service_name, description,
        service_provider_name, service_provider_image, price, service_location, _id } = service;

    return (
        <div>
            <div className="max-w-2xl font-poppins overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover w-full h-64" src={service_image} alt="Article" />

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400 flex justify-between">SERVICE
                            <div className="badge py-3 bg-[#0FE3AF] text-black">{service_location}</div>
                        </span>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" role="link">{service_name}</a>
                        <p title={description} className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description.substring(0, 150)}.....</p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img className="object-cover h-10 rounded-full" src={service_provider_image} alt="Avatar" />
                                <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" role="link">{service_provider_name}</a>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 FEB 2024</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between px-3 py-3 bg-[#0152A8] ">
                    <span className="font-bold text-gray-800 dark:text-gray-200">$ {price}</span>
                    <Link to={`details/${_id}`}><button className="px-2 py-1 text-xs font-semibold text-black uppercase transition-colors duration-300 transform bg-[#0FE3AF] rounded-md focus:outline-none">View Details</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default PopularService;