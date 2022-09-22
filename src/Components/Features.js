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
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div id="LastUpdate">
        <small className="text-muted">Ultima atualização 16/09/22</small>
        </div>
      </div>
    </Fragment>
  );
}
