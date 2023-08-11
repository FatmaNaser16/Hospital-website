import React from "react";
import './Footer.css';


const Footer = ()=>{
    return(
        <footer>
     <div class="container">
	     <div class="row">
			 
		     <div class="col-md-4">
			      <div class="footer-widget">
				      <h3>Contact Us</h3>
					  
					  <ul class="footer-address">
					      <li>
						    <i class="fa fa-map-marker" aria-hidden="true"></i>
							  <div>
							     <h4>Address</h4>
								  <p>33 Lorem Ipsum is simply dummy 
                                    text of the printing</p>
							  </div>
						  </li>
						  
						  <li>
						    <i class="fa fa-phone" aria-hidden="true"></i>
							  <div>
							     <h4>Phone</h4>
								  <p> <a href="tel:+0123456789">+0123456789</a></p>
							  </div>
						  </li> 
						  
						   <li>
						   <i class="fa fa-envelope-o" aria-hidden="true"></i>
							  <div>
							     <h4>Email</h4>
								  <p> <a href="tel:+0123456789">Support@company.com</a></p>
							  </div>
						  </li> 
						  
						  
					  </ul>
				 </div>
			 </div> 
			 
			 
			 
			<div class="col-md-2">
			      <div class="footer-widget">
				      <h3>Services</h3>
					   <ul class="footer-menu">
						   <li> <a href="#"> Neurology </a> </li>
						   <li> <a href="#"> Eyes care </a> </li>
						   <li> <a href="#"> Pulomonary</a> </li>
						   <li> <a href="#"> Cardiology</a> </li>
						   <li> <a href="#">Dental Care</a> </li>
						   <li> <a href="#">Hepatology</a> </li>
					  </ul>
				 </div>
			 </div>  
			 
			 
			<div class="col-md-2">
			      <div class="footer-widget">
				      <h3>Services</h3>
					   <ul class="footer-menu">
						   <li> <a href="#"> Neurology </a> </li>
						   <li> <a href="#"> Eyes care </a> </li>
						   <li> <a href="#"> Pulomonary</a> </li>
						   <li> <a href="#"> Cardiology</a> </li>
						   <li> <a href="#">Dental Care</a> </li>
						   <li> <a href="#">Hepatology</a> </li>
					  </ul>
				 </div>
			 </div>   
			 
			 
				<div class="col-md-4">
			      <div class="footer-widget">
				      <h3>Newsletter</h3>
					   <form>
					       <input type="email" placeholder="Enter Email"  class="form-control mb-2"/>
						   <input type="submit" value="Subscribe"  class="btn btn-white"/>
					  </form>
				 </div>
			 </div>   
			 
			 
			 
			 
		 </div>
	</div>	
</footer>	
    )
}



export default Footer;
