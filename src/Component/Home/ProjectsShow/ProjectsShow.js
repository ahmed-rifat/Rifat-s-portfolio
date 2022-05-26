import React from 'react';
import Project from './Project';
import websiteImg from "../../../assets/images/drissayon.jpg"
import TajImg from "../../../assets/images/Taj.jpg"
import ioliteImg from "../../../assets/images/iolite.jpg"
import dailylifeImg from "../../../assets/images/dailylife.jpg"
import pirateImg from "../../../assets/images/pirate.jpg"

const ProjectsShow = () => {

    const projects= [

        {
            _id:1,
            img:websiteImg,
            name: "দৃশ্যায়ন - Drrissayon",
            details:"This is a Wedding Photography Website",
            website: "https://drrissayon-2e22d.firebaseapp.com/",
            github: "https://github.com/ahmed-rifat/---Drrissayon"
        },
        {
            _id:2,
            img:TajImg,
            name: "Taj Furniture",
            details:"This is a Furniture Shop",
            website: "https://taj-furniture-c54c0.web.app/",
            github: "https://github.com/ahmed-rifat/Taj-Furniture"
        },
        {
            _id:3,
            img:ioliteImg,
            name: "Iolite Wedding Photography",
            details:"This is a Wedding Photography Website",
            website: "https://iolite-wedding.netlify.app/",
            github: "https://github.com/ahmed-rifat/Iolite-Wedding-Photography"

        },
        {
            _id:4,
            img:dailylifeImg,
            name: "Daily-Life-Plan",
            details:"This is a LifeStyle website",
            website: "https://elastic-morse-63d9f1.netlify.app/",
            github: "https://github.com/ahmed-rifat/Daily-Life-plan"

        },
        {
            _id:5,
            img:pirateImg,
            name: "Pirate Shop",
            details:"This is a Ecomerce Website",
            website: "https://pirate-shop-ecomerce.netlify.app/",
            github: "https://github.com/ahmed-rifat/pirate-shop"

        }
    ];

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
            
            {
                projects.map(project=> 
                <Project
                key={project._id}
                project={project}
                ></Project>)
            }
        </div>
    );
};

export default ProjectsShow;