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
                    <a href='https://play.google.com/store/games?hl=en' target='blank' className="btn p-6 rounded-2xl btn-outline  btn-warning "><img src={gImg } alt="" /> Google Play</a>
                    <a href='https://www.apple.com/app-store/' target='blank' className="btn p-6 rounded-2xl btn-outline btn-info"><img src={storeImg} alt="" /> App Store</a>

                </div>

                
        </div>
    );
};

export default BannerOne;