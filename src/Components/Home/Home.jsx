import React, { Suspense } from 'react';
import BannerOne from '../BannerOne/BannerOne';
import BannerTwo from '../BannerTwo/BannerTwo';
import Apps from '../Apps/Apps';
import Spinner from '../Spinner/Spinner';

const Home = () => {
    return (
        <div>
            <Suspense fallback={<Spinner></Spinner>}>
            <BannerOne></BannerOne>
            <BannerTwo></BannerTwo>
            <Apps></Apps>
            </Suspense>
        </div>
    );
};

export default Home;