import React from "react";
import doc1 from "../Assets/doc.jpg";
import doc2 from "../Assets/doc 7.jpg";
import doc3 from "../Assets/images (4).jpg";
import doc4 from "../Assets/medical-concept-indian-beautiful-female-260nw-1613858044.webp";
const doctors =()=>{
    return(
        
	<section class="team-section" id="team-section">
    <div class="container">
        <div class="row">
             <div class="col-md-12">
                 <h2 class="section-title text-center">Our Doctors</h2>
            </div>
            
            
            <div class="col-md-3">
                <div class="team-box">
                    <div class="team-media">
                         <img src={doc1} alt="" />
                    </div>
                    <div class="team-info">
                        <h3>Mark Jon</h3>
                        <h4>Cardiologist</h4>
                        <p>Dr. Mark John is a specialist neurologist and one of the most sought-after doctors in Germany</p>
                       
                    </div>
                </div>
            </div>
            
        <div class="col-md-3">
                <div class="team-box">
                    <div class="team-media">
                         <img src={doc2} alt="" />
                    </div>
                    <div class="team-info">
                        <h3>Nidar Hassan</h3>
                        <h4> Eye Care</h4>
                        <p>Dr. Nidar Hassan, a specialist in ophthalmology, Kasr Al-Aini medicine, a member of the International Society of Ophthalmology and a fellow of the Royal College of Surgeons in Edinburgh, a specialist in phaco cataract removal at the Nasser Institute for Research in Treatment and Refractive Surgery with LASIK</p>
                       
                    </div>
                </div>
            </div>
            
            
             <div class="col-md-3">
                <div class="team-box">
                    <div class="team-media">
                         <img src={doc3} alt=""/>
                    </div>
                    <div class="team-info">
                        <h3>Mohamed Ali</h3>
                        <h4>Pulomonary</h4>
                        <p>PhD in chest diseases and allergies</p>
                       
                    </div>
                </div>
            </div>
            
            
             <div class="col-md-3">
                <div class="team-box">
                    <div class="team-media">
                         <img src={doc4} alt=""/>
                    </div>
                    <div class="team-info">
                        <h3>Eman Ahmed</h3>
                       <h4>Dental Care</h4>
                    <p>Dentist specialized in Cosmetic Dentistry, Dental X-rays, Elderly Dentistry, Pediatric Dentistry, Dental Implants, Prosthodontics, Orthodontics, Oral and Maxillofacial Surgery, Periodontics, Adult Dentistry and Endodontics and Root Canal Treatment Specialized in Cosmetic Dentistry, Dental X-rays, Elderly Dentistry Pediatric dentistry, dental implants, prosthodontics, orthodontics, oral and maxillofacial surgery, gum treatment, adult teeth, fillings, and root and nerve treatment</p>
                    </div>
                </div>
            </div>
            
            
        </div>
   </div>
</section>
    )
}
export default doctors;