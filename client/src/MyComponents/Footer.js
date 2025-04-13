import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhone } from '@fortawesome/free-solid-svg-icons' 
// import { faInstagram } from '@fortawesome/free-brands-svg-icons'
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer2 = () => {
  return (
    <div>

    <div className="main">
        <br /><br />
        <div className="one">
            <img src="public\logo.png" alt="" />
            <br />
            <p>&#169; LegalMosaic Pvt. Ltd. India
            </p>

        </div>
        <div className="one">
            <h2>Get In Touch</h2>
            <pre>National Institute of Technology Patna, <br />
                Kateshwar, Bihta. <br />
                Pincode-801103
            </pre>
<br /><br />
            <h3>CONTACT US</h3>

        </div>
        <div className="one">
            <h2>Reasources</h2>
            <p>Legal Articles</p>
            <p>Case Studies</p>
            <p>Constitution</p>
            <p>News & Updates</p>

        </div>
        <div className="one">
            <div className="two">
                <h3>All Rights Reserved</h3>
                <h3>FAQs</h3>
            </div><br /><br />
<hr />
         <br /><br />   <button className="custom-login-button" type="button" >LegalMosaic</button>

        </div>
    </div>
    <hr />
<br /><br />
    <div className="main2">
        <div className="four"></div>
        <div className="four">
            <h2>Features</h2>
            <p>Legal Rights</p>
            <p>Community Forum</p>
            <p>Constitution</p>
            <p>Chatbot</p>
        </div>
        <div className="four">
            <h2> </h2>
            <p>Criminal Lawyers</p>
            <p>Family Lawyers</p>
            <p>Corporate Lawyer</p>
            <p>Tax Lawyer</p>
            <p>Many more...</p>
            
        </div>
        <div className="four" id='four1'>
            <h2>Contact With Us</h2>
            {/* <p><FontAwesomeIcon icon={faPhone} /> +91 1234567890</p>
            <p><a href='#'>
            <FontAwesomeIcon icon={faInstagram} /> <FontAwesomeIcon icon={faWhatsapp} /> <FontAwesomeIcon icon={faLinkedin} /> <FontAwesomeIcon icon={faXTwitter} /></a></p> */}
        </div>
    </div><br />
    </div>
  )
}

export default Footer2