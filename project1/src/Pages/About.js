/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import hosphoto from '../Assets/hospitalwebp.webp';
const About =()=>{
    return(
        <section class="about-section"  id="about-section">
        <div class="container">
            <div class="row gx-5">
                
               <div class="col-md-6">
                      <div class="about-media">
                        <img src={hosphoto} alt="" />
                   </div>
                </div>
                
                <div class="col-md-6">
                     <div  class="about-info">
                         <h3>About Us</h3>
                          <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy

</p>
                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                         
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                         <a href="#" class="btn btn-primary">Lean More</a>
                    </div>
                </div>
                
                
                
            </div>
      </div>
  </section>
    )
}

            export default About;