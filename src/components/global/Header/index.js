import { useState} from "react";
import './index.css';

const Header = (props) => {
    const menuItems = [
        {"link": "#home", "displayName": "Home"},
        {"link": "#about", "displayName": "About"},
        {"link": "#work", "displayName": "Work"},
        {"link": "#education", "displayName": "Education"},
        {"link": "#skills", "displayName": "Skills"},
        {"link": "#interests", "displayName": "Interests"},
        {"link": "#contact", "displayName": "Contact"}]

    const handleMenuClick = (e) => {
        console.log("test");
    }

    return (
        <header className="header" {...props}>
            <nav className="global-nav">
                <ul className="global-nav-menu">
                    { menuItems && menuItems.map(menuItem => (
                        <li key={menuItem.link} className="global-nav-menu-item">
                            <a href={`${menuItem.link}`} onClick={(e) => handleMenuClick(e)} >{menuItem.displayName}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
export default Header;