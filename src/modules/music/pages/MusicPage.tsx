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
import {Col, Container, Row} from "react-bootstrap";
import landingImage from "../images/band-land.jpg";
import Panel from "../../panels/components/Panel";

export default function MusicPage() {
    return (
        <Container fluid={true}>
            <Panel image={landingImage} imageAlt={"Band image"} title={"Diego Ling • Band"} className={"mb-3"}>
                <div className={"mb-3"} style={{opacity: 0.6}}>
                    <div>Альтернативная музыка. Группа основана в 2017 году</div>
                    <div>Лейбл звукозаписи: The Ling Records (Ling Black Records)</div>
                </div>
            </Panel>
            <Panel title={"Давайте знакомиться!"}>
                <div style={{opacity: 0.6}} className={"mb-3"}>
                    Лучшие треки по мнению исполнителей
                </div>
                <Row>
                    <Col md={6} sm={12} className={"mb-3"}>
                        <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/848292877&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
                    </Col>
                    <Col md={6} sm={12} className={"mb-3"}>
                        <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/707724667&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
                    </Col>
                </Row>
            </Panel>
        </Container>
    );
}
