import React from 'react';
import Infocard from './Infocard';
import clock from "../../assets/icons/clock.svg"
import phone from "../../assets/icons/phone.svg"
import marker from "../../assets/icons/marker.svg"

const Info = () => {

    const cardInfoData = {city: "Mirpur-11" , division: "Dhaka-1216"};
    const phoneInfo = {phone: "+8801685594315"};
    const socialInfo = {email: "Email: ahmedrifat1620@gmail.com", github: " GitHub: https://github.com/rifatbafsc", linkedin: "LinkedIn: https://www.linkedin.com/in/ahmed-rifat5952191a4"};
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <Infocard cardInfo= {socialInfo}bgClass="bg-gradient-to-r from-cyan-500 to-blue-500" cardTitle='Social' img={clock}></Infocard>
            <Infocard cardInfo={cardInfoData} bgClass="bg-accent" cardTitle='location' img={marker}></Infocard>
            <Infocard cardInfo= {phoneInfo} bgClass="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" cardTitle='Contact' img={phone}></Infocard>
        </div>
    );
};

export default Info;