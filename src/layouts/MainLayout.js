import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainContents from "./MainContents";


function MainLayout() {
    return (<div>
        <Header/>
        <MainContents/>
        <Footer/>
    </div>);
}

export default MainLayout;