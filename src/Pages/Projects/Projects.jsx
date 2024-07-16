import React from 'react';
import Project from '../../Components/Project/Project';

//IMPORT IMAGES STATIC
import ProjectOne from '../../images/relo.png';
import ProjectTwo from '../../images/unsplashed.png';
import ProjectThree from '../../images/Biotrkr.png';
import ProjectFour from '../../images/Jsweather.png';
import ProjectFive from '../../images/news.png';

const Projects = () => {
  const projectsList = [
    {
      title: 'Relo',
      description: 'Modern Website for smartwatches',
      image: ProjectOne,
      code: 'https://github.com/rickyanchores/relo',
      live: 'https://relo-oras.netlify.app',
    },
    {
      title: 'Unsplashed',
      description: 'Gallery powered by Unsplash API',
      image: ProjectTwo,
      code: 'https://github.com/rickyanchores/unsplashED',
      live: 'https://unsplash-ed.netlify.app/',
    },
    {
      title: 'BioTrkr',
      description: 'BMR/BMI calculator',
      image: ProjectThree,
      code: 'https://github.com/rickyanchores/Biotrkr',
      live: 'https://main.d1l6nwyn8to2ht.amplifyapp.com/',
    },
    {
      title: 'WeatherApp',
      description: 'Weather website powered by Openweathermap API',
      image: ProjectFour,
      code: 'https://github.com/rickyanchores/Jsweather',
      live: 'https://jsweatherapi.netlify.app/',
    },
    {
      title: 'News-ar01',
      description: 'News website that allows to search using news API',
      image: ProjectFive,
      code: 'https://github.com/rickyanchores/r-news',
      live: 'https://news-ar01.netlify.app',
    },
  ];

  return (
    <div className='Projects grid grid-cols-1 md:grid-cols-2 mt-2 gap-4' id='projects'>
      {projectsList.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          code={project.code}
          live={project.live}
        />
      ))}
    </div>
  );
};

export default Projects;
