import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

const Footer = () => {
  const footerLinks = [
    {
      title: "Explore",
      links: [
        { name: "Projects", link: "#works" },
        { name: "About Me", link: "#about" },
        { name: "Experience", link: "#experience" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Resume / CV", link: "/resume.pdf", isDownload: true },
        { name: "Tech Stack", link: "#tech" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Developer Blog", link: "https://yourblog.com", isExternal: true },
      ],
    },
  ];

  // const socialLinks = [
  //   { icon: test, url: "" },
  //   { icon: test, url: "" },
  //   { icon: test, url: "" },
  //   { icon: test, url: "" },
  // ];

  return (
    <footer className="w-full relative mx-auto mt-24 max-w-7xl px-6 pb-8">
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <h4 className="text-neutral-500 font-bold text-xs uppercase tracking-wider">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.link}
                      target={link.isExternal || link.isDownload ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-neutral-300 hover:text-white font-medium text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <h4 className="text-neutral-500 font-bold text-xs uppercase tracking-wider">
              Connect
            </h4>
            {/* <div className="flex flex-row gap-4 items-center text-neutral-400">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div> */}
          </div>
        </div>

        <div className="w-full h-[1px] bg-neutral-900" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-6 object-contain" />
          </Link>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs text-neutral-500 font-medium">
            <p>© {new Date().getFullYear()} YourName. All rights reserved.</p>
            <a href="#privacy" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;