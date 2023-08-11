import React from "react";
import Neurophoto from "../Assets/nervous.webp"
import eyephoto from "../Assets/your_family_eye_doctor_eye_exam.jpg"
import dentalphoto from "../Assets/urgent-vs-non-urgent-emergency-dental-care.jpg";
import pulphoto from "../Assets/istockphoto.jpg"
import hphoto from "../Assets/allgemeine-kardiologie.jpg"
import ophoto from "../Assets/istockphoto-649856016-612x612.jpg";
const Services =()=>{
    return( 
       < section class="services-section" id="services-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="section-title text-center">Services</h2>
                </div>
                <div class="col-md-4">
                     <div class="services-box">
                         <img src={Neurophoto} alt=""/>
                         <h3>Neurology</h3>
                         <p>Neurology, nervous system medicine, or the study of the nervous system is a medical specialty concerned with disorders of the nervous system. Nervous system medicine deals with the diagnosis and treatment of all categories of diseases that include any of the central or peripheral nervous system.</p>
                    </div>
                </div>
                <div class="col-md-4">
                     <div class="services-box">
                         <img src={eyephoto} alt=""/>
                         <h3>Eyes care</h3>
                         <p>Medicine dealing with diseases and surgery of the eyes and the visual pathways, including the eye, optic nerve, retina, vitreous and lens, iris, cornea, eyelids, and areas around the eye</p>
                    </div>
                </div> 
                <div class="col-md-4">
                     <div class="services-box">
                         <img src={pulphoto}alt=""/>
                         <h3>Pulomonary</h3>
                         <p>Pulmonary medicine is a branch of internal medicine, and it is also related to intensive care medicine. Pulmonary medicine usually involves treating patients undergoing resuscitation and mechanical ventilation procedures. Pulmonologists are specially trained to deal with diseases of the chest, particularly pneumonia, asthma, tuberculosis, chronic obstructive pulmonary disease, and complex infectious chest diseases.</p>
                    </div>
                </div>  
                <div class="col-md-4">
                     <div class="services-box">
                         <img src={hphoto}alt=""/>
                         <h3>Cardiology</h3>
                         <p>It is a branch of internal medicine concerned with heart health and the treatment of diseases related to the heart and circulatory system. This field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease, and electrophysiology. Doctors who specialize in this field are called cardiologists, pediatric cardiologists are pediatricians who specialize in heart conditions, and doctors who specialize in heart surgery are called cardiothoracic or cardiac surgeons, which is a specialty of general surgery.</p>
                    </div>
                </div>  
                
                <div class="col-md-4">
                     <div class="services-box">
                         <img src={dentalphoto} alt=""/>
                         <h3>Dental Care</h3>
                         <p>It consists of the study, diagnosis, prevention and treatment of diseases, disorders and conditions of the oral cavity, typically of the dentition (development and arrangement of teeth) as well as the oral mucosa and adjacent and associated structures and tissues, particularly in the maxillofacial region. The field of dentistry includes in addition to other aspects of the craniofacial complex including the temporomandibular joint and other supporting, muscular, lymphatic, nervous, vascular and anatomical structures</p>
                    </div>
                </div>
                
                 <div class="col-md-4">
                     <div class="services-box">
                         <img src={ophoto} alt=""/>
                         <h3>orthopedist</h3>
                         <p>It is the surgical branch of medicine that specializes in problems of the musculoskeletal system. Orthopedic surgeons use both surgical and non-surgical methods to treat musculoskeletal trauma, sports injuries, degenerative diseases, infections, tumors, and birth defects.</p>
                    </div>
                </div>
                </div>
       </div>
   </section>

    )
}
export default Services;