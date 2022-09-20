import { React, Fragment } from "react";
import Perfil2jpg from "../Images/Perfil2.jpg";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function AboutMe(props) {
  return (
    <Fragment>
      <div>
        <Card Card border="primary" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Perfil2jpg} />
          <Card.Body>
            <Card.Title>
              {props.Title}
            </Card.Title>
            <Card.Text>
              {props.Description}
              <br/>
              <a href="Contato">{props.LinkMessage}</a>
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
