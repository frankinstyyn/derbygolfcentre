import React from "react"
import { FaLocationArrow, FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa"
import logoTB from "../images/logoTB.png"

const Footer = () => {
  return (
    <div class="footer-section">
        <div class="container">
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 text-center text-lg-center">
                        <div class="copyright-text">
                            <p>Created by <a href="https://frankinstyyn.co.uk">FrankinstyynWeb</a> &copy;{new Date().getFullYear()} | All Right Reserved </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Footer;