import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const ManageService = () => {

    const { user } = useContext(AuthContext)
    const [services, setServices] = useState([])

    useEffect(() => {

        getService()

    }, [user])

    const getService = async () => {
        const { data } = await axios(`https://b9a11-consultation-server.vercel.app/addService/${user?.email}`)
        setServices(data)
    }


    const handleDelete = async (_id) => {
        try {
            const { data } = await axios.delete(`https://b9a11-consultation-server.vercel.app/addService/${_id}`)

            console.log(data)

            toast.success('Service deleted Successfully')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }

    return (
        <div>
            <Helmet>
                <title>
                    MedExpress | Manage Service
                </title>
            </Helmet>
            <div className="grid lg:grid-cols-2 md:grid-cols-1">
                {
                    services.map(service => (
                        <div key={service._id} className="max-w-xl overflow-hidden font-poppins bg-white rounded-lg shadow-lg dark:bg-gray-800 my-20 mx-auto">

                            <div className="flex items-center my-4 ml-4 gap-x-2">
                                <img className="object-cover w-12 h-12 rounded-full" src={user?.photoURL} alt="" />

                                <div className="pl-2">
                                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{user?.displayName}</h1>

                                    <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
                                </div>
                            </div>

                            <img className="object-cover w-full h-60 mt-2" src={service.image} alt="NIKE AIR" />

                            <div className="flex justify-between items-center">
                                <h2 className="pt-4 pl-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{service.name}</h2>
                                <h2 className="pt-4 pr-2">{service.area}</h2>
                            </div>

                            <p className="my-4 px-2  text-sm text-gray-600 dark:text-gray-200">{service.description}</p>

                            <div className="flex items-center justify-between px-4 py-4 bg-gray-900">
                                <h1 className="text-lg font-bold text-white">$ {service.price}</h1>

                                <div className="flex gap-4">
                                    <Link to={`/updateService/${service._id}`}><button className="btn bg-[#0152A8] text-white">Update</button>
                                    </Link>
                                    <button onClick={() => handleDelete(service._id)} className="btn bg-[#0FE3AF] text-black">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ManageService;