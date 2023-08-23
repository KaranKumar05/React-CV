import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as  Icon from 'react-bootstrap-icons'

import './index.css'

function Header() {
    // Dropdown Open script 
    // const toggleBtn = document.querySelector(".toggle_btn");
    // const toggleBtnIcon = document.querySelector(".toggle_btn i");
    // const dropDownMenu = document.querySelector(".drop_down");

    // toggleBtn.onclick = function () {
    //     dropDownMenu.classList.toggle("open");
    //     const isOpen = dropDownMenu.classList.contains("open");
    //     toggleBtnIcon.className = isOpen ? "bi bi-x" : "bi bi-list";
    // };

    return <div>
        <header className="header">
            <a href="#" className="logo">Portfolio.</a>
            <div id="menu-btn"><Icon.List /></div>
            <nav className="navbar">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Service</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    </div>
}
export default Header;
