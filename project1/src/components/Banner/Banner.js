import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner =(props)=>{

    return(
        <section className="banner">
    <div className="banner">
        <div className="row">
            <div className="col-lg-12 col-md-12">
            <h2>{props.tittle}</h2>
            <li>
                <Link to ="/home">
                    <FontAwesomeIcon icon={faHome}/>home
                </Link>
                /{props.smtittle}
            </li>
            </div>

        </div>
    </div>
        </section>  
                    
    )
}
export default Banner;