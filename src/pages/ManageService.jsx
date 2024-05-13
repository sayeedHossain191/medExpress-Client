import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";


const ManageService = () => {

    const { user } = useContext(AuthContext)
    const [services, setServices] = useState([])

    useEffect(() => {
        const getService = async () => {
            const { data } = await axios(`http://localhost:5000/addService/${user?.email}`)
            setServices(data)
        }
        getService()

    }, [user])

    return (
        <div>
            {
                services.map(service => (
                    <div key={service._id} className="max-w-sm overflow-hidden font-poppins bg-white rounded-lg shadow-lg dark:bg-gray-800 my-20 mx-auto">

                        <div className="flex items-center my-4 ml-4 gap-x-2">
                            <img className="object-cover w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100" alt="" />

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{service.service_provider_name}</h1>

                                <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
                            </div>
                        </div>

                        <img className="object-cover w-full h-48 mt-2" src={service.image} alt="NIKE AIR" />

                        <h2 className="pt-2 pl-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{service.name}</h2>

                        <p className="my-4 pl-2 text-sm text-gray-600 dark:text-gray-200">{service.description}</p>

                        <div className="flex items-center justify-between px-4 py-4 bg-gray-900">
                            <h1 className="text-lg font-bold text-white">$129</h1>
                            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ManageService;