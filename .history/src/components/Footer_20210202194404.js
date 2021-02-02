import React from "react"
import { FaLocationArrow, FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa"
import logoTB from "../images/logoTB.png"

const Footer = () => {
  return (
    <div class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <FaLocationArrow />
                            <div class="cta-text">
                                <h4>Business Info</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <FaPhone />
                            <div class="cta-text">
                                <h4>Call Me</h4>
                                  <span><a href="tel:07590647481">07590 647481</a> 
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <FaEnvelope />
                            <div class="cta-text">
                                <h4>Email Me</h4>
                                <span><a href="mailto:nigel@nigeljamesconsulting.co.uk">nigel@nigeljamesconsulting.co.uk</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-social-icon">
                                <span>Social Links</span>
                                <a href="https://www.linkedin.com/company/21602721/" className="linkedin-bg"><FaLinkedin /></a>
                                <a href="mailto:nigel@nigeljamesconsulting.co.uk" className="email-bg"><FaEnvelope /></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="nigelservices">Services</a></li>
                                <li><a href="golf">Golf Lessons</a></li>
                                <li><a href="contact">Contact</a></li>
                            </ul>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                              <div class="footer-logo">
                                  <a href="/"><img src={logoTB} alt="Nigel James Consulting logo"></img></a>
                            </div>
                        </div>
                      </div>
            </div>
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