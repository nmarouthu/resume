import { useState, useEffect } from "react";
import './index.css';

const Header = (props) => {
    const menuItems = [
        {"link": "#hero", "displayName": "Home"},
        {"link": "#about", "displayName": "About"},
        {"link": "#achievements", "displayName": "Achievements"},
        {"link": "#work", "displayName": "Work"},
        {"link": "#education", "displayName": "Education"},
        {"link": "#skills", "displayName": "Skills"},
        {"link": "#interests", "displayName": "Interests"},
        {"link": "#contact", "displayName": "Contact"}]

    useEffect(() => {

        const menuItemIds = menuItems.map(menuItem => menuItem.link.replace("#", ""));
        const itemsInView = new Map();
        menuItemIds.forEach(itemId => itemsInView.set(itemId, false));

        const handleIntersection = function (entries: IntersectionObserverEntry[]) {
            entries.forEach((entry) => {
                itemsInView.set(entry.target.id, entry.isIntersecting);

                const itemId = menuItemIds[Array.from(itemsInView.values()).lastIndexOf(true)];
                document.querySelectorAll(".global-nav-menu-item a.active").forEach((el) => {
                    el.classList.remove("active");
                });
                let results = document.querySelector(".global-nav-menu-item a[href='#" + itemId + "']");
                if (results) {
                    results.classList.add("active");
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, { rootMargin: '-20% 0px -80% 0px' });

        menuItemIds.forEach(itemId => {
            const element = document.getElementById(itemId);
            element && observer.observe(element);
        });
        return () => observer.disconnect();
    }, [menuItems]);

    const handleMenuClick = (e) => {
        const element = document.getElementById(e.target.getAttribute("href").replace("#",""));
        if ( !element ) return;
        window.scroll({
            top: element.offsetTop - 20,
            behavior: 'smooth'
        });
        e.preventDefault();
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