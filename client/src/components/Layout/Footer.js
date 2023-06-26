import React from "react";
import { Link } from "react-router-dom";
import {FaFacebookSquare } from "react-icons/fa";
import {RiInstagramFill,RiTwitterFill } from "react-icons/ri";
import {ImLinkedin } from "react-icons/im";
const Footer = () => {
  const footerStyle = {
    width: '100%',
    height: '130px',
    background:"#08622a",
    padding:'15px 35px',
    lineHeight: '0.6',
  };
  const textStyle = {
    fontSize: '30px',
  }
  return (
    <div className="footer" style={footerStyle}>
      <h1 className="text-center" style={textStyle}>All Right Reserved &copy; leafLine</h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>|
        <Link to="/faq">FAQ</Link>
      </p>
      <p className="text-center mt-3" style={{fontSize:'30px',cursor:'pointer'}}>
        <FaFacebookSquare/> <RiInstagramFill/> <ImLinkedin/> <RiTwitterFill/>
      </p>
    </div>
  );
};

export default Footer;
