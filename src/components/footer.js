import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import * as  Icon from 'react-bootstrap-icons'

import './index.css'

function Footer() {
    return <div>
        <footer class="footer">
            <div class="footer-text">
                <p>Copyright &copy; 2023 by Karan | All Rights Reserved</p>
            </div>
            <div class="footer-icon">
                <a href="#home"><Icon.ArrowUpCircle /></a>
            </div>
        </footer>
    </div>
}
export default Footer;
