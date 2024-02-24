import React, { useState } from 'react';
import './navbar.css';
import { Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import menu from '../../../assets/menu.png';
import ntu from '../../../assets/ntu2.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchButtonClick = () => {
        setShowSearch(!showSearch);
    };

    return (
        <nav className="navbar">
            <RouterLink to='/'>
                <img src={ntu} alt="logo" className='logo' />
            </RouterLink>
            <div className='desktopMenu'>
                <div className='dropdown'>
                    <RouterLink to='/' className='desktopMenuListItem'>
                        Explore
                        <i className='fas fa-caret-down arrow-icon' />
                    </RouterLink>
                    <div className="dropdown-content">
                        <RouterLink to="/projectlist" className="dropdown-item">
                            Projects
                        </RouterLink>
                        <RouterLink to="/userlist" className="dropdown-item">
                            Users
                        </RouterLink>
                    </div>
                </div>
                <RouterLink to='/project' className='desktopMenuListItem'>Start a Project</RouterLink>
                <RouterLink to='/' className='desktopMenuListItem'>How it Works</RouterLink>

                {/* <ScrollLink to='howitworks' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>
                    How it Works
                </ScrollLink> */}
            </div>

            <div className='desktopMenuBtns'>

                <div className='searchmain'>
                    <button className='desktopMenuBtn' onClick={handleSearchButtonClick}>
                        <i className="fa-solid fa-magnifying-glass desktopMenuImg"></i>
                    </button>
                    <div className="search-content">
                        {showSearch && (
                            <div className="search">
                                <input type="text" className='searchText' placeholder="Search..." />
                                <i className="fa-solid fa-x x-icon" onClick={handleSearchButtonClick}></i>
                            </div>
                        )}
                    </div>
                </div>

                <div className='dropdown'>
                    <button className='desktopMenuBtn'>
                        <i className='fa-regular fa-user desktopMenuImg'></i>
                    </button>
                    <div className="dropdown-content2">
                        <RouterLink to="/signup" className="dropdown-item">
                            Sign Up
                        </RouterLink>
                        <RouterLink to="/login" className="dropdown-item">
                            Log In
                        </RouterLink>
                    </div>
                </div>
            </div>

            <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
                <ScrollLink activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Home</ScrollLink>
                <ScrollLink activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Explore <i className='fas fa-caret-down' /></ScrollLink>
                <ScrollLink activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Start a Project</ScrollLink>
                <ScrollLink activeClass='active' to='techstack' spy={true} smooth={true} offset={-95} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>How it Works</ScrollLink>
                <ScrollLink activeClass='active' to='contact' spy={true} smooth={true} offset={-110} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Contact</ScrollLink>
            </div>
        </nav>
    )
}

export default Navbar