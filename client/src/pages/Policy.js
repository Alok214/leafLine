import React from "react";
import Layout from "./../components/Layout/Layout";
import priPol from "../Images/pp.jpg";
const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus "  style={{marginTop:"8%"}}>
        <div className="col-md-6 ">
          <img
            src={priPol}
            alt="contactus"
            style={{ width:'70%',marginTop:'-5px'}}
          />
        </div>
        <div className="col-md-4"
       
        >
          <p
      style={{background:'rgba(0, 128, 0, 0.237)',borderRadius:'61% 39% 40% 60% / 65% 65% 35% 35% ',fontWeight:"500",fontFamily:'cursive'}} >
      We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information when you visit and make purchases through our plant selling website. We collect information such as your name, contact details, and payment information to process your orders and provide a personalized experience. We may share your information with trusted third parties for shipping and payment processing. Your data is kept secure and will not be sold or rented to third parties for marketing purposes. By using our website, you consent to the collection and use of your personal information as outlined in this Privacy Policy.
</p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
