import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter,  } from "react-icons/bs";


function Footer(props) {
    return (
        <footer class="footer-distributed">

        <div class="footer-right">

        <BsFacebook className="quantity" color={"#c59d5f"} size={30} />
        <BsInstagram className="quantity" color={"#c59d5f"} size={30} />
        <BsTwitter className="quantity" color={"#c59d5f"} size={30} />
             
        

        </div>

        <div class="footer-left">

            <p class="footer-links">
            

                <a className='link' href="#menu">Menu</a>
            </p>

            <p>Restuarant Name &copy; 2021</p>
        </div>

    </footer>
    );
}

export default Footer;