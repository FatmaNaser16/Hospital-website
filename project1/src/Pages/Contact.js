import { faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Banner from "../components/Banner/Banner";
import './Contact.css';

const Contact =()=>{
    return(
        <>
        <Banner tittle="Contact" smtittle="Contact"/>
        <section className="contact-us">
        <div className="container">
            <div className="row">
            <div className="col-lg-6 col-md-6">
                <form>
                    <div className="fom-control">
                        <input placeholder="Your Name"/>
                    </div>
                    <div className="fom-control">
                        <input placeholder="Email"/>
                    </div>
                    <div className="fom-control">
                        <input placeholder="phone Number"/>
                    </div>
                  <select>
                    <option>Select Department</option>
                    <option>Neurology</option>
                    <option>Eyes care</option>
                    <option>Pulomonary</option> 
                    <option>Cardiology</option>
                    <option>Dental Care</option>
                    <option>orthopedist</option>
                  </select>
                    <div className="fom-control">
                        <input placeholder="Message"/>
                    </div>
                    <button>Submit</button>
                </form>    
            </div>
            </div>
            </div>
        </section>
        </>

    )
}
export default Contact;