import { React, Fragment } from "react";
import Perfilpng from "../Images/Perfil.webp";
import "../styles/Features.scss";

import Card from "react-bootstrap/Card"
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import { CardTitle } from "reactstrap";

export default function Features(){
  return (
    <div>
      <div class="card  " style={{width: "30rem"}}>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}
