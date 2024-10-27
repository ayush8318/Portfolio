import React from 'react';
import Layout from '../layout/Layout';
import ProjCards from './ProjCards';
import { projectOne,projectTwo,projectThree } from '../../assets';

const Projects = () => {
  return (
     <section id="projects"
     className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='felx justify-center items-center text-center'> 
      <Layout  
      title="Visit My Portfolio And Keep your Feedback"
      des=" MY Projects"/>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
      <ProjCards
          title="Netflix Clone"
          des="I developed a Netflix clone using HTML and CSS, focusing on creating an intuitive and visually appealing user interface. The project replicates the layout and design elements of Netflix, including a sleek navigation bar, responsive movie thumbnails, and a structured content grid. The design is fully responsive, ensuring optimal user experience across different screen sizes.  "
          src={projectOne}
          Gitlink={"https://github.com/ayush8318/Nclone"}
          Olink={"https://ayush8318.github.io/Nclone/"}

        />
        <ProjCards
          title="TakeNotes"
          des="I developed TakeNotes using HTML, JS, React, and Bootstrap, focusing mainly on the backend. I built robust APIs for user authentication (login/signup), note creation, and deletion using Node.js and Express.js. For security, I implemented bcrypt with salt and pepper to ensure strong password hashing. To manage state efficiently without prop drilling, I used Context API, and for data storage, I used MongoDB Atlas."
          src={projectTwo}
          Gitlink={"https://github.com/ayush8318/Take-Note"}
          Olink={"https://master--take-note-today.netlify.app/"}
        />
        <ProjCards
          title="Spotify Clone"
          des="The Spotify Clone is a music streaming interface built with HTML, CSS, and JavaScript, designed to mimic Spotify's core design and basic functionality. It features a responsive layout, media controls (play/pause, volume, song switching). It provides a smooth user experience with simulated audio playback and visually appealing design elements, showcasing skills in front-end development, responsive design, and JavaScript interactivity."
          src={projectThree}
          Gitlink={"https://github.com/ayush8318/spotify"}
          Olink={"https://ayush8318.github.io/spotify/"}
        />
         
      </div>
     </section>
  );
}

export default Projects;
