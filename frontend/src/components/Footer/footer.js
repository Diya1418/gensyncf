import React from "react";
import style from "./footer.module.css";
import { Link} from "react-router-dom";

function Footer() {
  
  return (
    <>
       <footer>
          <div className="footer">
            < h1>@Gensync</h1>
              <div className="about-box">
                <h3>Bhagwan Parshuram Institute Of Technology</h3>
                <div>
                    <ul>
                      <li><strong>Contact Information:1234567843</strong><br></br></li>
                      <li> Location: 123 College Street, City, Country<br></br></li>
                      <li>Email: <a href="mailto:info@college.edu">info@college.edu</a><br></br></li>
                      <li> Website: <a href="http://www.college.edu" target="_blank">www.college.edu</a><br></br></li>
                    </ul>
                </div>
              </div>
             </div> 
       </footer>       
    </>
  );
}


export default Footer;