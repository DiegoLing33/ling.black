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
import "./Panel.scss";

export type PanelProps = React.PropsWithChildren<PropsWithClassName<{
    image?: string;
    imageAlt?: string;
    title?: string;
}>>;

export default function Panel(props: PanelProps) {
    const realClassName = createClassName("panel", props.className);
    return (
        <div className={realClassName}>
            {props.image && (
                <img className={"panel-image"}
                     src={props.image}
                     alt={props.imageAlt}/>
            )}
            <div className={"panel-body"}>
                {props.title && (
                    <div className={"panel-title"}>{props.title}</div>
                )}
                {props.children}
            </div>
        </div>
    );
}