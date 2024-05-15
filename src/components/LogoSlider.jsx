import Marquee from "react-fast-marquee";

import img1 from '../assets/6.png';
import img2 from '../assets/1.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/brand_2.png.png';


const LogoSlider = () => {
    return (
        <div>
            <h2 className="text-[#007E85] font-poppins text-center mt-20">Trusted by 10,000+ companies around the world</h2>
            <div className="my-20">
                <Marquee direction="right" speed={100} >
                    <div className="image_wrapper mr-40">
                        <img src={img1} alt="" />
                    </div>
                    <div className="image_wrapper mr-40">
                        <img src={img2} alt="" />
                    </div>
                    <div className="image_wrapper mr-40">
                        <img src={img3} alt="" />
                    </div>
                    <div className="image_wrapper mr-40">
                        <img src={img4} alt="" />
                    </div>
                    <div className='mr-40'>
                        <img src={img5} alt="" />
                    </div>
                    <div className="image_wrapper mr-40">
                        <img src={img6} alt="" />
                    </div>

                </Marquee>
            </div>
        </div>
    );
};

export default LogoSlider;