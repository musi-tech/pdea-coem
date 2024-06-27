import React from 'react';
import './footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-column">
                    <img src="/pdea1.jpeg"  alt="Logo" />
                    <p>Pune District Education Association's College of Engineering, Manjari (Bk)
    Manjari Bk, Pincode: 412307</p>
                    <p style={{marginBottom:'20px'}}>Contact us:+91546568113</p>
                    <iframe title="pdea-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.104819898327!2d73.98019681028899!3d18.52416478249738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c258af5922cf%3A0xde3b91beb5003629!2sPune%20District%20Education%20Association&#39;s%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1717219096288!5m2!1sen!2sin" width="240" height="150"  style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
                <div className="footer-column">
                    <h3>Social Media</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact</h3>
                    <ul>
                        <li>Address</li>
                        <li>Faculty</li>
                        <li>Office</li>
                        <li>Mail</li>
                        <li>Department</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Admission Inquiry</h3>
                    <ul>
                        <li>Toll-Free Number</li>
                        <li>FE Admission</li>
                        <li>Engineering Admission</li>
                        <li>College Contact</li>
                        <li>MBA Admission</li>
                        <li>DSE Admission</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>SPPU</li>
                        <li>Samaj Kalyan</li>
                        <li>PDEA Pune</li>
                        <li>Anti Ragging</li>
                        <li>AICTE</li>
                        <li>MAHADBT</li>
                        <li>DTE</li>
                        <li>RO-DTE Pune</li>
                        <li>Women's DRI Cell</li>
                        <li>Mandatory SID</li>
                    </ul>
                </div>
            </footer>
            <div className="footer-copyline">
            <p>© 2024 PDEA College Of Engineering. All Rights Reserved.</p>
            <p>Developed By: <a href="/">MusiTech</a></p>
            </div>
        </>
    );
};

export default Footer;
