import React, { useState } from 'react';
import { Link } from "react-router-dom";

const SideMenu = () => {
    const [active, setActive] = useState(false)
    
    const hadnleOnMouseEnter = () => {
        setActive(true);
    }

    const handleOnMouseLeave = () => {
        setActive(false);
    }

    const handleOnClick = () => {
        if(active){
            setActive(false)
        }
    }

    const handleHamburgerClick = () => {
        setActive(!active);
    }

    return (
        <div className={`side-menu__wrapper ${active ? "side-menu--is-open" : ""}`} 
        onMouseEnter={hadnleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        >
            <nav className="side-menu">
                <div 
                    className="side-menu__hamburger-wrapper"
                    onClick={handleHamburgerClick}
                >
                    <div className="hamburger">
                        <div className="hamburger__line"></div>    
                    </div>
                </div>   
                <h3 className="side-menu__title">Site admin</h3> 
                <ul className="side-menu__links">
                    <li 
                        className="side-menu__link" 
                        onClick={handleOnClick}
                    >
                        <Link to="/" className="menu-link">
                            <span className="menu-link__icon">
                                <i className="fas fa-globe-europe"></i>
                            </span>
                            <span className="menu-link__text">
                                Customer Overveiw
                            </span>    
                        </Link>
                    </li>
                    <li 
                        className="side-menu__link" 
                        onClick={handleOnClick}
                    >
                        <Link to="/reports" className="menu-link">
                            <span className="menu-link__icon">
                                <i className="fas fa-grip-lines"></i>
                            </span>
                            <span className="menu-link__text">
                                Reports
                            </span>    
                        </Link>
                    </li>
                    <li 
                        className="side-menu__link" 
                        onClick={handleOnClick}
                    >
                        <Link to="/file-transcodings" className="menu-link">
                            <span className="menu-link__icon">
                                <i className="fas fa-file-image"></i>
                            </span>
                            <span className="menu-link__text">
                                File Transcodings
                            </span>    
                        </Link>
                    </li>
                    <li 
                        className="side-menu__link" 
                        onClick={handleOnClick}

                    >
                        <Link to="/notifications-center" className="menu-link">
                            <span className="menu-link__icon">
                                <i className="fas fa-bell"></i>
                            </span>
                            <span className="menu-link__text">
                                Notifications Center
                            </span>    
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>    
    )
}

export default SideMenu;