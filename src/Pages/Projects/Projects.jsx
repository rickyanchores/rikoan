import React from 'react';
import Project from '../../Components/Project/Project';

//IMPORT IMAGES STATIC
import ProjectOne from '../../images/relo.png';
import ProjectTwo from '../../images/unsplashed.png';
import ProjectThree from '../../images/watchfinder.png';
import ProjectFour from '../../images/Jsweather.png';
import ProjectFive from '../../images/uchiha.png';

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
      title: 'WatchFinder',
      description: 'Website search engine powered by Amazon Data API',
      image: ProjectThree,
      code: 'https://github.com/rickyanchores/watchfinder',
      live: 'https://watchufinder.netlify.app/',
    },
    {
      title: 'WeatherApp',
      description: 'Weather website powered by Openweathermap API',
      image: ProjectFour,
      code: 'https://github.com/rickyanchores/Jsweather',
      live: 'https://jsweatherapi.netlify.app/',
    },
    {
      title: 'Uchiha Restaurant',
      description: 'Restaurant minimalist website in NextJS',
      image: ProjectFive,
      code: 'https://github.com/rickyanchores/uchiha',
      live: 'https://uchiharestaurant.netlify.app',
    }
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
