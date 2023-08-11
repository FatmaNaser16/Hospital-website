import React, { Fragment } from "react";
import {Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbars from "../Nav/Navbar";

const Layout = ()=>{
    return(
        <Fragment>
        <Navbars/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </Fragment>
    )
}
export default Layout;