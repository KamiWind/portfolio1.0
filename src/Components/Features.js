import { React, Fragment } from "react";
import Perfilpng from "../Images/Perfil.webp";
import "../styles/Features.scss";

import Card from "react-bootstrap/Card";

import { IoLogoHtml5 } from "react-icons/io";
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
              >
                <SiInstagram /> Instagram
              </a>
              <br />
              <a
                class="text-decoration-none"
                href="https://www.linkedin.com/in/glaucio-castilho-361505242/"
              >
                <SiLinkedin /> LinkedIn
              </a>
              <br />
              <a
                class="text-decoration-none"
                href="https://github.com/KamiWind"
              >
                <SiGithub /> Github
              </a>
            </div>
          </div>
        </div>
        <div id="Description">
          <h1>Saiba mais sobre mim!</h1>
            <p className="fw-semibold">
            Idade: 26 Ano(s) Estado civil: Solteiro Cor: Pardo Sexo: Masculino
            <br/>
            Nacionalidade: Brasileiro Naturalidade: Rio de Janeiro (Carioca)
            <br/>
            Resido Atualmente: Nova Iguaçú-RJ
            <br/>
            <strong className="fw-semibold">Obs: Estou disposto a Jobs presencial e/ou home office.</strong>
            </p>
        </div>
        <div id="LastUpdate">
          <small className="text-muted">Ultima atualização 16/09/22</small>
        </div>
      </div>
    </Fragment>
  );
}
