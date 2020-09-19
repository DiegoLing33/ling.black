import React from "react";
import "./AppWrapper.scss";
import AppFooter from "../AppFooter";

export default function AppWrapper({children}: React.PropsWithChildren<{}>) {
    return (
        <div className={"app-wrapper"}>
            <div className="bg"/>
            {children}
            <AppFooter/>
        </div>
    );
}