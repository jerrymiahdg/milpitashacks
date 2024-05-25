import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ConditionalNav = ({children}) => {
    const location = useLocation();

    const [ showNav, setShowNav ] = useState(true);

    useEffect(() => {
        if (location.pathname === "/countdown") {
            setShowNav(false);
        } else {
            setShowNav(true);
        }
    }, [location]);

    return (
        <div>
            {showNav && children}
        </div>
    )
}

export default ConditionalNav;