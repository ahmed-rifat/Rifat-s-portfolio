import React from 'react';

const Project = ({project}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img  src={project.img} alt="website" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{project.name}</h2>
                <p>{project.details}</p>
                <div class="card-actions">
                <a href={project.website}><button class="btn btn-primary">Visit Website</button></a>
                </div>
            </div>
        </div>
    );
};

export default Project;