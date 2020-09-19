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
import './SocialLink.scss'

export interface SocialLinkProps{
    url: string;
    img: string;
    text: string;
    className?: string;
}

export default function SocialLink(props: SocialLinkProps){
    return (
        <a href={props.url} className={props.className}>
            <div className="social-item">
                <img src={props.img} alt={"Social icon"} className="mr-2"/>
                {props.text}
            </div>
        </a>
    );
}
