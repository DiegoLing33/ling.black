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
import {Col, Row} from "react-bootstrap";
import landingImage from "../images/band-land.jpg";
import Panel from "../../panels/components/Panel";

export default function MusicPage(){
    return (
        <div>
            <Row>
                <Col md={12}>
                   <Panel image={landingImage} imageAlt={"Band image"} title={"Diego Ling • Band"}>
                       <div className={"mb-3"}>
                           <div>Alternative music band owned in 2019</div>
                           <div>Record label: The Ling Records (Ling Black Records)</div>
                       </div>
                        <div>
                            ...
                        </div>
                   </Panel>
                </Col>
            </Row>
        </div>
    );
}
