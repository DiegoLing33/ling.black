/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 + ██╗░░░░░██╗███╗░░██╗░██████╗░░░░██████╗░██╗░░░░░░█████╗░░█████╗░██╗░░██╗ +
 + ██║░░░░░██║████╗░██║██╔════╝░░░░██╔══██╗██║░░░░░██╔══██╗██╔══██╗██║░██╔╝ +
 + ██║░░░░░██║██╔██╗██║██║░░██╗░░░░██████╦╝██║░░░░░███████║██║░░╚═╝█████═╝░ +
 + ██║░░░░░██║██║╚████║██║░░╚██╗░░░██╔══██╗██║░░░░░██╔══██║██║░░██╗██╔═██╗░ +
 + ███████╗██║██║░╚███║╚██████╔╝░░░██████╦╝███████╗██║░░██║╚█████╔╝██║░╚██╗ +
 + ╚══════╝╚═╝╚═╝░░╚══╝░╚═════╝░░░░╚═════╝░╚══════╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝ +
 +                                                                          +
 + Developed by Yakov V. Panov (C) Ling • Black 2020                        +
 + @site http://ling.black                                                  +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

import React from "react";
import {createClassName, PropsWithClassName} from "../../../../core/shared/props";
import {Container} from "react-bootstrap";
import AppFooter from "../AppFooter";

export type AppContainerProps = React.PropsWithChildren<PropsWithClassName<{}>>;

export default function AppContainer(props: AppContainerProps) {
    const {children, className} = props;
    const realClassName = createClassName(className);
    return (<Container className={realClassName}>
        {children}
        <AppFooter/>
    </Container>);
}