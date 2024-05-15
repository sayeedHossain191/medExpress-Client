import award from '../assets/image 6.png'

const Award = () => {
    return (
        <div className='font-poppins my-20'>
            <div className="text-center max-w-lg mx-auto">
                <h1 className='text-xl text-[#0152A8] font-semibold mb-5'>AWARDS</h1>
                <h2 className='text-5xl font-semibold'>Winning Awards and Recognition</h2>
                <p className='mt-5'>We have been recognized for our commitment to <br /> excellence in healthcare.</p>
            </div>

            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5 mx-20 my-10'>
                <div className="card card-side shadow-xl bordered border-[#0152A8]">
                    <figure className='bg-[#3D83C8] px-4'><img src={award} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Malcolm Baldrige National Quality Award</h2>

                    </div>
                </div>
                <div className="card card-side shadow-xl bordered border-[#0152A8]">
                    <figure className='bg-[#3D83C8] px-4'><img src={award} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">HIMSS Davies Award</h2>

                    </div>
                </div>
                <div className="card card-side shadow-xl bordered border-[#0152A8]">
                    <figure className='bg-[#3D83C8] px-4'><img src={award} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Healthgrades National’s Best Hospital</h2>

                    </div>
                </div>
                <div className="card card-side shadow-xl bordered border-[#0152A8]">
                    <figure className='bg-[#3D83C8] px-4'><img src={award} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Joint Commission Gold Seal of Approval</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Award;