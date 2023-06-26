import React from "react";
import Layout from "./../components/Layout/Layout";
import {MdEmail,MdCall } from "react-icons/md";
import {RiInstagramFill } from "react-icons/ri";
import contact from '../Images/contact.jpg'
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus " style={{height:'60%',marginTop:'20px'}}>
        <div className="col-md-6 ">
          <img
            src={contact}
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4" style={{height:'60%',marginTop:'20px',background:'rgba(0, 128, 0, 0.237)',borderRadius:'61% 39% 40% 60% / 65% 65% 35% 35% ',fontWeight:"500",fontFamily:'cursive'}}>
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
          How to reach us -
<br></br>
You can contact us in the following ways:
          </p>
          <p className="mt-3">
            <MdEmail /> : leafline@leafline.com
          </p>
          <p className="mt-3">
            <MdCall /> : 7023456789
          </p>
          <p className="mt-3">
            <RiInstagramFill /> : @leafLine123
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
