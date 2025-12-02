import React from "react";
import Nav from "./Navbar";
import Footer from "./Footer"
import { Outlet } from "react-router-dom";


export default function UserLayout(){
    return(
        <>
        <Nav/>
        <Outlet/>
        <Footer/>
        </>
    )
}