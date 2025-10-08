import React from 'react';

import gImg from '../../assets/fi_16076057.png';
import storeImg from '../../assets/Group.png';


const BannerOne = () => {
    return (
        <div className='text-center max-w-[1200px] mx-auto p-6'>
                <h1 className='text-4xl font-bold'>We Build <br />
                <span className='text-[#9F62F2]'>Productive</span> Apps
                </h1>

                <p className='text-gray-600 mt-3'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex justify-center gap-3 mt-3'>
                    <button className="btn p-2"><img src={gImg } alt="" /> Google Play</button>
                    <button className="btn p-2"><img src={storeImg} alt="" /> App Store</button>

                </div>

                
        </div>
    );
};

export default BannerOne;