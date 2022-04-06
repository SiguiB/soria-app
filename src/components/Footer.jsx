import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className="footer">
      <footer class="py-2 bg-info fixed-bottom">
        <div className="contact">
          <ul style={{fontSize:"1.3em"}}>
            <li><a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="mailto:sigui.bojorquez@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;