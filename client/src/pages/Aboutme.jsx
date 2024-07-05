import  { useState } from 'react';
import About1 from './About1.jpeg';

const Aboutme = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const description = `
    Utkarsh Singh is a dedicated software developer currently pursuing a Bachelor of Technology in Computer Science and Engineering from Pranveer Singh Institute of Technology, Kanpur Nagar, UP. With a solid foundation in programming languages such as Python, C/C++, SQL, JavaScript, and HTML/CSS, Utkarsh excels in frontend and full-stack development. He has interned at InternPixel, where he significantly improved user engagement metrics and client satisfaction rates.

    Utkarsh has successfully executed projects like a Vehicle Rental System, which connected users directly with vehicle owners, and a City Information Website, providing real-time news updates and comprehensive information about Azamgarh city. His technical prowess extends to frameworks such as React, Node.js, and Tailwind CSS, and he is proficient in developer tools like Git, Docker, and VS Code.
  `;

  const shortDescription = description.substring(0, 300);

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen p-5">
      <div className="bg-white shadow-lg rounded-lg max-w-7xl w-full flex flex-col md:flex-row">
        
        <div className="md:w-2/3 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 mb-4">
            {isExpanded ? description : `${shortDescription}...`}
          </p>
          <button
            onClick={handleReadMore}
            className="self-start px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
        
        <div className="md:w-1/3 p-6 bg-blue-100 flex flex-col items-center justify-center">
          <img className="w-96 h-98  mb-4 object-cover" src={About1} alt="Profile Picture" />
          <h2 className="text-xl font-semibold mb-2">Utkarsh Singh</h2>
          <p className="text-gray-600">Software Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
