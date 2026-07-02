import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logo, menu, close } from '../assets';

const navLinks = [
  { id: 'explore', title: 'Explore' },
  { id: 'work', title: 'Work' },
  { id: 'project', title: 'Projects'},
  { id: 'article', title: 'Articles', badge: 'Coming Soon' },
  { id: 'contact', title: 'Contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitors scroll to add the subtle backdrop blur seen on the live site
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 right-0 w-full z-50 transition-all duration-300 h-40 border-b border-neutral-900 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-black'
      }`}
    >
      <div className='w-full flex items-end justify-between max-w-7xl mx-auto px-6 h-full pb-10'>
        
        {/* Logo */}
        <Link 
          to='/' 
          className='flex items-center gap-2' 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="defichain logo" className='h-6 object-contain' />
        </Link>

        {/* Desktop Navigation & CTA Container */}
        <div className='hidden md:flex items-center gap-12'>
          <ul className='list-none flex flex-row items-center gap-10'>
            {navLinks.map((link) => (
              <li 
                key={link.id}
                className="relative group cursor-pointer"
                onClick={() => setActive(link.title)}
              >
                {/* Dynamic "Coming Soon" Badge */}
                {link.badge && (
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-wider uppercase bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                    {link.badge}
                  </span>
                )}
                
                <a 
                  href={`#${link.id}`} 
                  className={`text-[15px] font-medium transition-colors duration-200 ${
                    active === link.title ? "text-white" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* DeFiChain Iconic Gradient Border Button */}
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-r from-[#FF00AF] to-[#7000FF]">
            <span className="relative px-6 py-2 transition-all ease-in duration-75 bg-black rounded-full group-hover:bg-opacity-0">
              Get CV Form
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden flex items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-6 h-6 object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Dropdown Menu */}
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-black absolute top-20 left-0 right-0 w-full border-b border-neutral-900 flex-col gap-6 z-40`}
          >
            <ul className='list-none flex flex-col gap-5'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`text-[16px] font-medium ${
                    active === link.title ? 'text-white' : 'text-neutral-400'
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`} className="flex items-center gap-2">
                    {link.title}
                    {link.badge && (
                      <span className="text-[9px] bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded-full uppercase">
                        {link.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
            
            <button className="w-full text-center py-2.5 rounded-full bg-gradient-to-r from-[#FF00AF] to-[#7000FF] text-white text-sm font-medium">
              Get DFI
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;