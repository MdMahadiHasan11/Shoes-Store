import React from 'react';

const Navber = () => {
    return (
        <div className="flex   items-center justify-between pt-2 pb-8 bg-yellow-700 py-8  text-white">
            <div>
                <p className="text-xl pl-5 font-bold">Shoes-Shop</p>
            </div>

            {/* <div className="md:p-4 p-2 md:space-x-6 space-x-2 font-semibold">
                <a href="#home" className='text-cyan-500'> Home</a>
                <a href="#about" >About Me</a>
                <a href="#skills">Skills</a>
                <a href="#services">Services</a>
                <a href="#projects" >Projects</a>
                <a href="#contract">Contract</a>
            </div> */}
            <div className="hidden md:flex  md:p-4 p-2 md:space-x-6 space-x-2 font-semibold">
                <a href="#home" className='text-cyan-500'>Home</a>
                {/* <a href="#about" className="transition transform hover:scale-110 hover:text-cyan-500">About Me</a>
                <a href="#skills" className="transition transform hover:scale-110 hover:text-cyan-500">Skills</a>
                <a href="#services" className="transition transform hover:scale-110 hover:text-cyan-500">Services</a>
                <a href="#projects" className="transition transform hover:scale-110 hover:text-cyan-500">Projects</a> */}
                <a href="#contract" className="transition transform hover:scale-110 hover:text-cyan-500">Contract</a>
            </div>

            <div className="md:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className=" right-0 border border-[#020617] bg-[#020617] menu menu-sm rounded-box z-[1] mt-3 dropdown-content  shadow">
                        <li className="transition transform hover:scale-105 rounded-box hover:bg-[#26052E]">
                        <a href="#home" className='text-cyan-500'>Home</a>
                        </li>
                        {/* <li className="transition transform hover:scale-105 rounded-box hover:bg-[#26052E]">
                        <a href="#about">About</a>
                        </li>
                        <li className="transition transform hover:scale-105 rounded-box hover:bg-[#26052E]">
                        <a href="#skills">Skills</a>
                        </li>
                        <li className="transition transform hover:scale-105 rounded-box hover:bg-[#26052E]">
                        <a href="#services">Services</a>
                        </li>
                        <li className="transition transform hover:scale-105 rounded-box hover:bg-[#26052E]">
                        <a href="#projects">Projects</a>
                        </li> */}
                        <li className="transition transform hover:scale-105 rounded-box hover:bg-[#26052E]">
                        <a href="#contract">Contract</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    );
};

export default Navber;