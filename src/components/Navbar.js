import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { FaTimes,FaAlignJustify   } from "react-icons/fa";
import { navLinks } from '../constants';
const   Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
      };
    
      useEffect(() => {
        const closeMenu = () => {
          setToggle(false);
        };
    
        window.addEventListener('scroll', closeMenu);
    
        return () => {
          window.removeEventListener('scroll', closeMenu);
        };
      }, []);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
     <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2'
        onClick={()=>{
            setActive("")
            window.scrollTo(0,0)
        }}>
          <p className='text-white text-[18px] font-bold cursor-pointer'>Hikmah</p>
        </Link>

        <ul className={`list-none gap-10 sm:flex hidden flex-row`}>
            {navLinks.map((link)=>{
               return ( 
               <li
                key={link.id}
                onClick={()=>setActive(link.title)}
                className={`${active === link.title ? 'text-white' :'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}>
                <a href={`#${link.id}`}>{link.title}</a>
                </li>
                )
            })}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center cursor-pointer text-[28px]'
        onClick={handleToggle}>
          {toggle ? <FaTimes /> : <FaAlignJustify />}

          <div className={`${!toggle ? 'hidden' :'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className={`list-none flex justify-end items-start flex-col gap-4 `}>
            {navLinks.map((link)=>{
               return ( 
               <li
                key={link.id}
                onClick={()=>{
                  setActive(link.title);
                  setToggle(!toggle)
                }}
                className={`${active === link.title ? 'text-white' :'text-secondary'} text-[16px] font-medium cursor-pointer`}>
                <a href={`#${link.id}`}>{link.title}</a>
                </li>
                )
            })}
        </ul>
          </div>
        </div>
     </div>
    </nav>
  )
}

export default Navbar