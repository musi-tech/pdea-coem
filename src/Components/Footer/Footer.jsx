import React from 'react';
import './footer.css'; // Import the CSS file
import Logo from "../../assets/images/pdea1.png";
import { FaInstagram } from "react-icons/fa";
import { socialMediaLinks, contactInfo, admissionInquiry, quickLinks } from '../../data/footer'; // Import data

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-column">
          <img src={Logo} width={70} alt="Logo" className="mx-auto" />
          <p>Pune District Education Association's College of Engineering, Manjari (Bk)<br />
            Manjari Bk, Pincode: 412307</p>
          <p style={{ marginBottom: '20px' }}>Contact us: +91546568113</p>
          <iframe
            title="pdea-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.104819898327!2d73.98019681028899!3d18.52416478249738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c258af5922cf%3A0xde3b91beb5003629!2sPune%20District%20Education%20Association's%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1717219096288!5m2!1sen!2sin"
            width="240"
            height="150"
            style={{ border: '0' }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="footer-column">
          <h3>Social Media</h3>
          <ul>
            {socialMediaLinks.map((link) => (
              <li key={link.id}>
                <a href={link.url} target="_blank" rel="noreferrer">
                    {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            {contactInfo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Admission Inquiry</h3>
          <ul>
            {admissionInquiry.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noreferrer">{link.title}</a>
              </li>
            ))}
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
