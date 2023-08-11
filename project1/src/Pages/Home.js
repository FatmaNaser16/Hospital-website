import React from 'react';
import headerimage from '../Assets/standing-team-260nw.webp';
import'./Home.css';
function Home() {
    return (
        <header>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 col-lg-8'>
                        <h5>We Provide All Health Care Solution</h5>
                        <h2>Protect Your Health And Take Care TO of Your Health</h2>
                        <button><a href='#'>Read More</a></button>
                    </div>
                    <div className='col-lg-4 col-md-4'>
                        <img src={headerimage} className="photo"/>
                    </div>
                </div>

            </div>
        </header>
    );
}
export default Home;