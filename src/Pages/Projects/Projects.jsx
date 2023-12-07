import React from 'react';
import Project from '../../Components/Project/Project';

const Projects = () => {

  const projectsList = [
    {
      title: "Project One",
      description: "Photography website",
      image: "https://rickyanchores.netlify.app/static/media/Citypx.da061d51a11fba28f583.jpg",
      code: "https://github.com/rickyanchores/CiTYPiX",
      live: "https://rickyanchores.github.io/CiTYPiX/"
    },
    {
      title: "Project Two",
      description: "Gallery powered by Unsplash API",
      image: "https://rickyanchores.netlify.app/static/media/unsplash-ED.c3a9a4bfa014661d5d42.png",
      code: "https://github.com/rickyanchores/unsplashED",
      live: "https://unsplash-ed.netlify.app/"
    },
    {
      title: "Project Three",
      description: "BMR/BMI calculator",
      image: "https://rickyanchores.netlify.app/static/media/Biotrkr.c29decb2596975901786.png",
      code: "https://github.com/rickyanchores/Biotrkr",
      live: "https://main.d1l6nwyn8to2ht.amplifyapp.com/"
    },
    {
      title: "Project Four",
      description: "Weather website powered by Openweathermap API",
      image: "https://rickyanchores.netlify.app/static/media/JSWeather.7365639c2174ade9c50d.png",
      code: "https://github.com/rickyanchores/iOn",
      live: "https://i0n.netlify.app/"
    },
    {
      title: "Project Five",
      description: "Modern Note Tracker with Tailwind",
      image: "https://rickyanchores.netlify.app/static/media/iOn.0ed715e2471ecfcb7e90.png",
      code: "https://github.com/rickyanchores/iOn",
      live: "https://i0n.netlify.app/"
    }
  ];

  return (
    <div className="Projects grid grid-cols-1 md:grid-cols-2 m-2 gap-4" id='projects'>
      {projectsList.map((project, index) => (
        <Project key={index} title={project.title} description={project.description} image={project.image} code={project.code} live={project.live}/>
      ))}
    </div>
  );
};

export default Projects;