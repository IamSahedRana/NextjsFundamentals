
import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Developer page',
  description: 'Developer page description',
}

const DeveloperPage = () => {
     return (
          <div>
               <h1> This is the Developer About page</h1>
          
          <Image src="/powerbi.png" width={300} height={300} alt="Power BI Logo" /> 

     <Image src="https://i.ibb.co.com/4n23KRYk/1500x500.jpg" width={300} height={300} alt="Image bb Image" />
          
          
          </div>
     );
};

export default DeveloperPage;