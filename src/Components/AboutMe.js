import { React, Fragment } from "react";
import Perfil2jpg from "../Images/Perfil2.jpg";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function AboutMe() {
  return (
    <Fragment>
      <div>
        <Card Card border="primary" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Perfil2jpg} />
          <Card.Body>
            <Card.Title>Glaucio Castilho Dev.</Card.Title>
            <Card.Text>
              Sou um garoto desenvolvedor que esta entrando nessa área a pouco
              tempo. estudo dev. web desde 24/03/22, e domino o básico de HTML,
              CSS, JavaScript, React, Bootstrap e Sass. Estudo diariamente para
              se tornar um dev melhor, eu acredito que conseguindo um emprego
              como dev será muito desafiador e também ira me trazer muito mais
              aprendizado. Seria um prazer trabalhar com você ou para você!
              Entre em <a href="Contato">Contato</a> comigo para conversar
              sobre.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Ultima atualização 17/09/22</small>
          </Card.Footer>
        </Card>
      </div>
    </Fragment>
  );
}
