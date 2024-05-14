// import axios from 'axios';
// import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import image from '../assets/scan.png'

const ServiceToDo = () => {

    // const [services, setServices] = useState([])

    // useEffect(() => {

    //     const getService = async () => {
    //         const { data } = await axios(`http://localhost:5000/bookedService/${user?.email}`)
    //         setServices(data)
    //     }
    //     console.log(services)
    //     getService()

    // }, [user])

    return (
        <div>
            <Helmet>
                <title>
                    MedExpress | Service To Do
                </title>
            </Helmet>


            <div className='font-poppins'>
                <div className="hero -mt-18" style={{ backgroundImage: `url(${image})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg">
                            <h1 className="mb-5 text-5xl font-bold">Find Your Desired Service</h1>
                            <p className="mb-10"> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
                        </div>
                    </div>
                </div>

                <div className="card mx-20 bg-base-100 shadow-xl -mt-10">
                    <div className="card-body">

                        <div className='flex justify-between'>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Find by Category</option>
                                <option>Pending</option>
                                <option>Working</option>
                                <option>Completed</option>
                            </select>

                            <div className='flex gap-5'>
                                <label className="input input-bordered flex items-center gap-2 max-w-xs">
                                    <input type="text" className="grow" placeholder="Search" />
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                </label>

                                <button className="btn bg-[#007E85] ">Search</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceToDo;