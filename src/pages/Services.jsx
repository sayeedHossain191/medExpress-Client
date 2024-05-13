
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        const getService = async () => {
            const { data } = await axios(`http://localhost:5000/service`)
            setServices(data)
        }
        getService()

    }, [])
    // const { service_image, service_name, description,
    //     service_provider_name, service_provider_image, price, service_location, specialization } = allServices

    return (
        <div className='font-poppins my-20 grid grid-cols-1 gap-10'>
            <Helmet>
                <title>
                    MedExpress | All Services
                </title>
            </Helmet>

            {
                services.map(service => <div key={service._id} className="card card-side bg-base-100 shadow-xl">
                    <figure className="max-w-sm shadow-2xl"><img src={service.service_image} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{service.service_name}</h2>
                        <p>{service.description}</p>

                        <div className="flex items-center mt-8 -mx-2">
                            <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src={service.service_provider_image} alt="" />

                            <div className="mx-2">
                                <h1 className="font-semibold text-gray-800 dark:text-white">{service.service_provider_name}</h1>
                                <span className="text-sm text-gray-500 dark:text-gray-400">CTO, Robert Consultency</span>
                            </div>
                        </div>

                        <div className="card-actions justify-end">
                            <button className="btn bg-[#0FE3AF] text-white">View Details</button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Services;