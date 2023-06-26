import React from "react";
import Layout from "./../components/Layout/Layout";
import Footer from "../components/Layout/Footer";
import faqImg from "../Images/faq.jpg";
import "../styles/faq.css";
const Faq = () => {
    return(
        <Layout title={"Privacy Policy"}>
        <div className="container box" style={{marginTop:'80px'}} >
        <div className="box1">
            <img src={faqImg} alt="FaqImg"/>
        </div>
        <div className="box2">
        <h1 className="text-center mt-3">Frequently Asked Questions (FAQ)</h1>

<h4 className="text-center mt-3">What types of plants are available on your website?</h4>
<p className="text-center mt-3">We offer a wide variety of plants, including flowering plants, succulents, indoor plants, outdoor plants, herbs, bonsai trees, and more. You can browse through our categories to explore the plant options available.</p>
 
<h4 className="text-center mt-3">Are the plants on your website healthy and of good quality?</h4>
<p className="text-center mt-3">Yes, we take great care in sourcing and maintaining the health and quality of our plants. We work with reputable nurseries and suppliers to ensure that the plants we offer are in excellent condition. We also provide detailed descriptions and images for each plant to give you a clear understanding of its health and appearance.</p>

<h4 className="text-center mt-3">Do you offer international shipping?</h4>
<p className="text-center mt-3">Currently, we offer shipping within [insert country/countries]. We do not provide international shipping at the moment. However, we are constantly evaluating options to expand our shipping coverage in the future.</p>

<h4 className="text-center mt-3">How long does it take for my order to be shipped?</h4>
<p className="text-center mt-3">We strive to process and ship orders as quickly as possible. Typically, orders are shipped within 1-3 business days after the payment has been confirmed. Please note that shipping times may vary depending on your location and the specific plant(s) you have ordered.</p>
        </div>
        </div>
        </Layout>
    )
}

export default Faq;