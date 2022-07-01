import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div style={{ backgroundColor: "#292929" }}>
            <div className="flex justify-between max-w-7xl mx-auto">
                <div className='navbar'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                                <li className='linkColor'><Link to="/">To-Do</Link></li>
                                <li className='linkColor'><Link to="/completed">Completed</Link></li>
                                <li className='linkColor'><Link to="/calender">Calender</Link></li>
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost normal-case text-xl" style={{ color: "#F2E7FE" }}>Task Manager</Link>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li className='linkColor'><Link to="/">To-Do</Link></li>
                            <li className='linkColor'><Link to="/completed">Completed</Link></li>
                            <li className='linkColor'><Link to="/calender">Calender</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;