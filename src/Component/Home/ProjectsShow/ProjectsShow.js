import React from 'react';
import Project from './Project';
import websiteImg from "../../../assets/images/drissayon.jpg"

const ProjectsShow = () => {

    const projects= [

        {
            _id:1,
            img:websiteImg,
            name: "দৃশ্যায়ন - Drrissayon",
            details:"This is a Wedding Photography Website",
            website: "https://drrissayon-2e22d.firebaseapp.com/"
        },
        {
            _id:2,
            img:websiteImg,
            name: "দৃশ্যায়ন - Drrissayon",
            details:"This is a Wedding Photography Website",
            website: "https://drrissayon-2e22d.firebaseapp.com/"
        },
        {
            _id:3,
            img:websiteImg,
            name: "দৃশ্যায়ন - Drrissayon",
            details:"This is a Wedding Photography Website",
            website: "https://drrissayon-2e22d.firebaseapp.com/"
        },
        {
            _id:4,
            img:websiteImg,
            name: "দৃশ্যায়ন - Drrissayon",
            details:"This is a Wedding Photography Website",
            website: "https://drrissayon-2e22d.firebaseapp.com/"
        },
        {
            _id:5,
            img:websiteImg,
            name: "দৃশ্যায়ন - Drrissayon",
            details:"This is a Wedding Photography Website",
            website: "https://drrissayon-2e22d.firebaseapp.com/"
        },
        {
            _id:6,
            img:websiteImg,
            name: "দৃশ্যায়ন - Drrissayon",
            details:"This is a Wedding Photography Website",
            website: "https://drrissayon-2e22d.firebaseapp.com/"
        },
    ];

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
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