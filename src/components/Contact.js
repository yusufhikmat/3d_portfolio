
import React from 'react'
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { contact } from '../constants';
import { SectionWrapper } from '../hoc';
import StarsCanvas from './canvas/Stars';

const Contact = () => {
  return (
    <section className='mt-7'>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Get in  touch
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Contact.
        </h2>
      </motion.div>
    <div className='text-center leading-[4rem] md:py-10 py-5'>
        <h2 className={`${styles.heroSubText} text-center`}>
          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
        </h2>
        <p>hikmatyusuff2020@gmail.com</p>
        <ul>
        {contact.map((link) => (
            <Link
            to={link.link}
              key={`${link}-${link.name}`}
              className={` items-center flex-col justify-center gap-5 ${link.color}`}
            >
               <img src={link.icon} alt={link.name} className='w-10 h-10 object-contain inline mx-5'/>
            </Link>
          ))}
      </ul>
        <p>Made with ❤️ by Yusuf Hikmah</p>
      
    </div>
    <StarsCanvas />
    </section>
  ) 
}

export default SectionWrapper(Contact, "contact");