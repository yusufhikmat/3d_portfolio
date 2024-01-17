import React from "react";
import { styles } from "../styles";
import  BallCanvas  from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


const Tech = () => {
  return (
    <>
    <p className={`${styles.sectionSubText} mb-3`}>Tech Stack</p>
    
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className="items-center">{technology.name}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");