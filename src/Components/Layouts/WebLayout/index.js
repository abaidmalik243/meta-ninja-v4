import React from "react";
import Navbar from "Components/Navabr";
import MetaFooter from "Components/MetaFooter";
import Header from "Components/Header";


function WebLayout({ children, showHeader = true }) {
    return (
        <>
            <Navbar />
            {showHeader && <Header />}
            {children}

            <MetaFooter />
        </>
    );
}

export default WebLayout;
