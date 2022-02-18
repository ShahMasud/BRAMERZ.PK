import '../Footer/style.scss';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { NavLink, Nav } from 'react-bootstrap';

import React from 'react'
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className='footerContainer'>
        <div className='row main_div'>

            <div className='col col-lg-6 col-md-8 col-sm-12 innerDiv'>
            <div className='title'><p>bramerz</p></div>

            <div className='mb-3 List'>
                <li>12-D (CCA), Phase 5,</li>
                <li>DHA, Lahore, Pakistan.</li>
            </div>

            <div className='List'>
                <li>+92 42 32309239</li>
                <li>+92 321 2726379 (BRAMERZ)</li>
                <li>+92 333 2726379 (BRAMERZ)</li> 
                <li>hello@bramerz.pk</li>  
            </div>
            </div>

            <div className='col col-lg-6 col-md-8 col-sm-12 innerDiv-2 mb-4'>
            <div className='mb-5'>
                <h4>We are a different kind of agency</h4>
                <p>Ready to create the next big thing ?</p>
            </div>
            <p className='mb-5'>Connect with us</p>
            <div className='icons'>
            <FaFacebookF/>
            <AiOutlineInstagram/>
            <AiFillLinkedin/>
            <FaTwitterSquare/>
            </div>

        </div>
        <div className='row  footerNav'>
        <div className="col col-lg-8 col-md-12 col-sm-12 col-xs-12 columnOne">
                
                <NavLink className='navLink' to="/"> ©Bramerz 2006-2022</NavLink>
                <NavLink className='navLink' to="/"> PrivacyPolicy</NavLink>
                <NavLink className='navLink' to="/">TermsOfUse</NavLink>
                <NavLink className='navLink' to="#action1">Disclaimers</NavLink>
                
            </div>
        <div className='col col-lg-4 col-md-12 col-sm-12 col-xs-12 heart'>
            <p>Made with love in Lahore, Pakistan</p>
        </div>
        </div>

        
        
        


        </div>
        
        
        
         

        
       

    

    </Container>
    
  )
}

export default Footer

 {/* <div className='row'>
        <div className='col col-lg-6 col-md-12 col-sm-12 justify-content-md-start justify-content-sm-start text-black'>

            <div className='innerDiv'>
            <div className='title'><p>bramerz</p></div>

            <div className='mb-3 List'>
                <li>12-D (CCA), Phase 5,</li>
                <li>DHA, Lahore, Pakistan.</li>
            </div>

            <div className='List'>
                <li>+92 42 32309239</li>
                <li>+92 321 2726379 (BRAMERZ)</li>
                <li>+92 333 2726379 (BRAMERZ)</li> 
                <li>hello@bramerz.pk</li>  
            </div>
            </div>

        </div>

        <div className='col col-lg-6 col-md-12 col-sm-12 justify-content-md-start justify-content-sm-start innerDiv-2 text-end mb-5'>
            <div className='mb-5'>
                <h4>We are a different kind of agency</h4>
                <p>Ready to create the next big thing ?</p>
            </div>
            <p className='mb-5'>Connect with us</p>
            <div className='icons'>
            <FaFacebookF/>
            <AiOutlineInstagram/>
            <AiFillLinkedin/>
            <FaTwitterSquare/>
            </div>

        </div>

        <div className='row  footerNav'>
        <div className="col col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start">
                
                <NavLink className='navLink' to="/"> ©Bramerz 2006-2022</NavLink>
                <NavLink className='navLink' to="/"> PrivacyPolicy</NavLink>
                <NavLink className='navLink' to="/">TermsOfUse</NavLink>
                <NavLink className='navLink' to="#action1">Disclaimers</NavLink>
                <NavLink className='navLink' to="#action2">Careers</NavLink>
                <NavLink className='navLink' to="#action1">Contact</NavLink>
            </div>
        <div className='col col-lg-6 col-md-12 col-sm-12 col-xs-12 heart'>
            <p>Made with love in Lahore, Pakistan</p>
        </div>
        </div>
        </div>
    */}
  