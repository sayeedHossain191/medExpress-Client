import bg1 from '../assets/department_icon_1.svg.png'
import bg2 from '../assets/department_icon_2.svg.png'
import bg3 from '../assets/department_icon_3.svg.png'
import bg4 from '../assets/department_icon_4.svg.png'
import bg5 from '../assets/department_icon_5.svg.png'
import background from '../assets/sasun-bughdaryan-RlIppR1I3E8-unsplash.jpg'

const Department = () => {
    return (
        <div className='font-poppins my-20'>
            <div className="hero" style={{ backgroundImage: `url(${background})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-60 mt-20 text-6xl font-bold">Departments</h1>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-5 sm:grid-cols-1 gap-5 ml-6'>
                <div className="card w-64 h-72 bg-base-100 shadow-xl -mt-20">
                    <figure className="px-10 pt-10">
                        <img src={bg1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Emergency
                            Department</h2>
                    </div>
                </div>
                <div className="card w-64 h-72 bg-base-100 shadow-xl -mt-20">
                    <figure className="px-10 pt-10">
                        <img src={bg2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pediatric
                            Department</h2>
                    </div>
                </div>
                <div className="card w-64 h-72 bg-base-100 shadow-xl -mt-20">
                    <figure className="px-10 pt-10">
                        <img src={bg3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Gynecology
                            Department</h2>
                    </div>
                </div>
                <div className="card w-64 h-72 bg-base-100 shadow-xl -mt-20">
                    <figure className="px-10 pt-10">
                        <img src={bg4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cardiology
                            Department</h2>
                    </div>
                </div>
                <div className="card w-64 h-72 bg-base-100 shadow-xl -mt-20">
                    <figure className="px-10 pt-10">
                        <img src={bg5} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Neurology
                            Department</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Department;