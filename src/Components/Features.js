import { React, Fragment } from "react";
import Perfilpng from "../Images/Perfil.webp";
import "../styles/Features.scss";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";

export default function Features() {
  return (
    <Fragment>
      <div id="Features">
        <div id="FeaturesFlex">
          <div id="FeaturesHeader">
            <img src={Perfilpng} />
            <div>
              <h1>Glaucio Castilho</h1>
              <p>Dev. Web</p>
            </div>
          </div>
          <div id="FeaturesSubHeader">
            <div id="Redes">
              <a
                class="text-decoration-none"
                href="https://www.instagram.com/glauciocastilho1/"
                target="_blank"
              >
                <SiInstagram /> Instagram
              </a>
              <br />
              <a
                class="text-decoration-none"
                href="https://www.linkedin.com/in/glaucio-castilho-361505242/"
                target="_blank"
              >
                <SiLinkedin /> LinkedIn
              </a>
              <br />
              <a
                class="text-decoration-none"
                href="https://github.com/KamiWind"
                target="_blank"
              >
                <SiGithub /> Github
              </a>
            </div>
          </div>
        </div>
        <div id="Description">
          <h1>Saiba mais sobre mim!</h1>
          <p className="fw-semibold">
            <Row>
              <Col>
              Idade: 26 Ano(s)
              </Col>
              <Col>
              Cor: Pardo
              </Col>
            </Row>
            <Row>
              <Col>
              Estado Civil: Solteiro
              </Col>
              <Col>
              Sexo: Masculino
              </Col>
            </Row>
            <Row>
              <Col>
              Nacionalidade: Brasileiro
              </Col>
              <Col>
              Naturalidade: Rio de Janeiro
              </Col>
            </Row>
            <br/>
            <strong className="fw-semibold">
              Obs: Estou disposto a Jobs presencial e/ou home office.
            </strong>
          </p>
        </div>
        <div id="LastUpdate">
          <small className="text-muted">Ultima atualização 16/09/22</small>
        </div>
      </div>
    </Fragment>
  );
}
