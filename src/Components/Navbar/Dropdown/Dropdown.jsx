import React from "react";
import PropTypes from "prop-types";

function Dropdown({ title, links }) {
  return (
    <li className="dropdown ">
      <a href={title.href} target="_blank" rel="noopener noreferrer">{title.text}</a>
      <ul className="dropdown-content  ">
        {links.map((link, index) => (
          <li key={index} className="">
            <a href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>
            {link.subLinks && (
              <ul className="dropdown-subcontent ">
                {link.subLinks.map((subLink, subIndex) => (
                  <li key={subIndex}>
                    <a href={subLink.href} target="_blank" rel="noopener noreferrer">{subLink.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
}

Dropdown.propTypes = {
  title: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    subLinks: PropTypes.arrayOf(PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }))
  })).isRequired
};

export default Dropdown;
