import React from "react";
import "./AppWrapper.scss";
import AppContainer from "./AppContainer";

export default function AppWrapper({children}: React.PropsWithChildren<{}>) {
    return (
        <div className={"app-wrapper"}>
            <div className="bg"/>
            {children}
        </div>
    );
}

AppWrapper.Container = AppContainer;