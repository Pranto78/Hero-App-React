import React from 'react';
import BannerOne from '../BannerOne/BannerOne';
import BannerTwo from '../BannerTwo/BannerTwo';
import Apps from '../Apps/Apps';

const Home = () => {
    return (
        <div>
            <BannerOne></BannerOne>
            <BannerTwo></BannerTwo>
            <Apps></Apps>
        </div>
    );
};

export default Home;