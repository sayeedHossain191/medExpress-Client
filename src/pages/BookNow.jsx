import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookNow = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext)
    const service = useLoaderData();

    const { _id, service_image, service_name,
        service_provider_name, price, service_location } = service;

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

    }
    return (
        <div>
            <section className="max-w-4xl p-6 mx-auto bg-gray-500 rounded-md shadow-md">
                <h2 className="text-lg font-semibold  capitalize dark:text-white">Account settings</h2>

                <form onSubmit={handleFormSubmission}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div className='form-control'>
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
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Purchase</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default BookNow;