import React, { PropTypes } from 'react';
import './index.css';

const Footer = (props) => {

  return (
    <footer>
      <p>© {new Date().getFullYear()} {props.company}</p>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  company: PropTypes.string.isRequired
};
