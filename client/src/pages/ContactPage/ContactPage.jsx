import React from "react";
import Reeds from "../../components/svgs/Reeds";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactPage.scss";

const ContactPage = () => {
    return (
      <main id ="contactpage">
          <Reeds />
          <p>Find out about us or contact us</p>
            <h1 className = "About us"></h1>
            <h2 className = "Need help? Contact us?"></h2>
      </main>  
    
    )

}
export default ContactPage;