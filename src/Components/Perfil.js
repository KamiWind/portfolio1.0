import { React, Fragment } from "react";
import Perfilpng from "../Images/Perfil.webp";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';

import { FaReact } from "react-icons/fa";
import { SiJavascript, SiCss3 } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";

export default function Perfil() {
  return (
    <Fragment>
      <div>
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Perfilpng} />
          <Card.Body>
            <Card.Title><Badge className="fs-3"bg="dark">Glaucio Castilho</Badge>
            </Card.Title>
            <Card.Text class="text-start">
              <p className="fw-semibold">
              Desde o primeiro contato com o desenvolvimento web eu me
              apaixonei, e desde então eu estudo diariamente para melhorar meu
              aprendizado e assim conseguir meu primeiro emprego como
              desenvolvedor web.
              </p>
            </Card.Text>
            <div>
              <Badge className="w-100 p-3">
              <h1 class="text-center text-white fw-bolder font-monospace">Skills</h1>
              <Row>
                <Col><p className="text-black"><IoLogoHtml5 /> HTML</p></Col>
                <Col><p className="text-black"><SiCss3 /> CSS</p></Col>
              </Row>
              <Row>
                <Col><p className="text-black"><SiJavascript /> JavaScript</p></Col>
                <Col><p className="text-black"><FaReact /> React</p></Col>
              </Row>
              </Badge>
            </div>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Ultima atualização 16/09/22</small>
          </Card.Footer>
        </Card>
      </div>
    </Fragment>
  );
}
