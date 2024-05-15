
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [servicePerPage, setServicePerPage] = useState(3)

    const { count } = useLoaderData();
    // const servicePerPage = 3;
    const numberOfPage = Math.ceil(count / servicePerPage)

    // const pages = [];
    // for (let i = 0; i, numberOfPage; i++) {
    //     pages.push(i)
    // }

    const pages = [...Array(numberOfPage).keys()];

    useEffect(() => {
        const getService = async () => {
            // const { data } = await axios(`https://b9a11-consultation-server.vercel.app/service`)
            const { data } = await axios(`https://b9a11-consultation-server.vercel.app/service?page=${currentPage}&sixe=${servicePerPage}`)
            setServices(data)
        }
        getService()

    }, [currentPage, servicePerPage])
    // const { service_image, service_name, description,
    //     service_provider_name, service_provider_image, price, service_location, specialization } = allServices

    const handleServicePerPage = (e) => {
        const val = parseInt(e.target.value);
        console.log(val)
        setServicePerPage(val)
        setCurrentPage(0)
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

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
                                <h1 className="font-semibold text-gray-800">{service.service_provider_name}</h1>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{service.specialization}</span>
                            </div>
                        </div>

                        <div className="card-actions justify-end">
                            <button className="btn bg-[#0FE3AF] text-white">View Details</button>
                        </div>
                    </div>
                </div>)
            }


            <div className='mx-auto'>

                <div className="flex">
                    <a onClick={handlePrevPage} href="#" className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        <div className="flex items-center -mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>

                            <span className="mx-1">
                                previous
                            </span>
                        </div>
                    </a>

                    {
                        pages.map(page => <a onClick={() => setCurrentPage(page)}
                            key={page} href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                            {page}
                        </a>)
                    }


                    <a onClick={handleNextPage} href="#" className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        <div className="flex items-center -mx-1">
                            <span className="mx-1">
                                Next
                            </span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </a>

                    <select value={servicePerPage} onChange={handleServicePerPage} name="" id="">
                        <option value="5">5</option>
                        <option value="6">10</option>
                        <option value="7">15</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Services;