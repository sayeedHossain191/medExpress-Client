import { useLoaderData } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import toast from 'react-hot-toast';

const ServiceDetail = () => {

    const [startDate, setStartDate] = useState(new Date());

    const { user } = useContext(AuthContext);
    const service = useLoaderData();

    const { _id, service_image, service_name, description,
        service_provider_name, service_provider_image, price, service_location, service_provider_detail, specialization } = service;


    const handleFormSubmission = async (e) => {
        e.preventDefault();

        const form = e.target;
        const serviceID = form.serviceID.value;
        const service_name = form.service_name.value;
        const service_image = form.service_image.value;
        const service_provider_name = form.service_provider_name.value;
        const user_email = user?.email;
        const user_name = user?.displayName;
        const service_location = form.service_location.value;
        const service_date = startDate;
        const instruction = form.instruction.value;
        const price = parseFloat(form.price.value);
        const status = 'Pending'

        const serviceData = {
            serviceID,
            service_name,
            service_image,
            service_provider_name,
            user_email,
            user_name,
            service_location,
            service_date,
            instruction,
            price,
            status
        }
        console.table(serviceData)

        try {
            const { service } = await axios.post('http://localhost:5000/bookedService', serviceData)
            console.log(service)

            toast.success('Service Purchased')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }

    }

    return (
        <div>
            <Helmet>
                <title>
                    MedExpress | Service Details
                </title>
            </Helmet>

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
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>

                                        <button title="right arrow" className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M9 5l7 7-7 7" />
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

                                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className="px-2 py-2 text-xs font-semibold text-black uppercase transition-colors duration-300 transform bg-[#0FE3AF] rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Book Now</button>
                                    {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()} >Modal</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <dialog id="my_modal_1" className="modal">
                <div className="modal-box max-w-5xl bg-slate-400">
                    <h3 className="font-bold text-lg text-center">Book Now</h3>
                    {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
                    <div className="modal-action place-content-center">
                        <form onSubmit={handleFormSubmission} method="dialog">
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div className='form-control w-[400px]'>
                                    <label className=" dark:text-gray-200">Service Name</label>
                                    <input disabled placeholder='Name' name="service_name" type="text" defaultValue={service_name} className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div className="form-control">
                                    <label className=" dark:text-gray-200">Image URL</label>
                                    <input disabled type="url" placeholder='image_url' name="service_image" defaultValue={service_image} className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div className='form-control'>
                                    <label className=" dark:text-gray-200">Price</label>
                                    <input disabled type="number" placeholder='price' name="price" defaultValue={price} className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div className='form-control'>
                                    <label className=" dark:text-gray-200">ServiceID</label>
                                    <input disabled id="passwordConfirmation" type="text" name="serviceID" defaultValue={_id} className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div className="form-control w-full">
                                    <label className="block text-gray-500 dark:text-gray-300">Special Instruction</label>

                                    <textarea placeholder='Type Here' name="instruction" className="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>
                                </div>
                                <br />
                                <div className="form-control">
                                    <label className=" dark:text-gray-200">User Name</label>
                                    <input disabled type="text" placeholder='name' name="user_name" defaultValue={user?.displayName} className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div className='form-control'>
                                    <label className=" dark:text-gray-200">User Email</label>
                                    <input disabled placeholder='email' name="user_email" type="email" defaultValue={user?.email} className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div className="form-control">
                                    <label className=" dark:text-gray-200">Service Provider Name</label>
                                    <input disabled type="text" placeholder='name' name="service_provider_name" defaultValue={service_provider_name} className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div className='form-control'>
                                    <label className=" dark:text-gray-200">Service Area</label>
                                    <input disabled placeholder='email' name="service_location" type="email" defaultValue={service_location} className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label className='text-gray-200'>Service Date</label>
                                    <DatePicker className='border p-2 rounded-md' selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>

                            </div>

                            <div className="flex justify-end mt-6">
                                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#0152A8] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Purchase</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ServiceDetail;