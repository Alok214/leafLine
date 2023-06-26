import React from "react";
import Layout from "./../components/Layout/Layout";
import aboutImg from '../Images/about.jpg'

const About = () => {
  return (
    <Layout title={"About us - Leafline app"}>
      <div className="row contactus " style={{marginTop:'80px'}}>
        <div className="col-md-6 ">
          <img
            src={aboutImg}
            alt="contactus"
            style={{ width:'80%',marginTop:'-5px'}}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2" style={{textAlign:'justify',borderRadius :'30% 70% 70% 30% / 30% 30% 70% 70% ',background:'rgba(0, 128, 0, 0.237)',fontWeight:"500",fontFamily:'cursive'}}>     
Welcome to Green Haven, your online destination for all things green and beautiful. We are dedicated to providing you with a wide selection of premium plants sourced from trusted nurseries and growers. Our team of passionate plant enthusiasts is here to assist you in finding the perfect plants for your home or office. We prioritize sustainability and eco-friendliness, offering plants grown using environmentally friendly practices. Join us in creating a greener world as we bring the beauty of nature right to your doorstep. Explore our online store and let us help you create your own green haven.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
