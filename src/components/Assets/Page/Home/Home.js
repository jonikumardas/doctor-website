import React from 'react';
import Info from '../Info/Info';
import Apointment from './Apointment';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Service from './Service/Service';
import Tastymonal from './Tastymonal';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <Apointment></Apointment>
            <Tastymonal></Tastymonal>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;