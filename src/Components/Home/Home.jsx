import React, { Suspense } from 'react';
import BannerOne from '../BannerOne/BannerOne';
import BannerTwo from '../BannerTwo/BannerTwo';
import Apps from '../Apps/Apps';

const Home = () => {
    return (
        <div>
            <Suspense fallback={<span>Loading.......</span>}>
            <BannerOne></BannerOne>
            <BannerTwo></BannerTwo>
            <Apps></Apps>
            </Suspense>
        </div>
    );
};

export default Home;