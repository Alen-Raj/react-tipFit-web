import React from "react";
import AdminNavbar from "./Navbar";
import { Outlet } from "react-router-dom";


export default function AdminLayout(){
    return(
        <>
        <AdminNavbar/>
        <Outlet/>
        </>
    )
}