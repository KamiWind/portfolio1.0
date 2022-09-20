import React from "react";
import Perfilpng from "../Images/Perfil.webp";

import { BsInstagram, BsCodeSlash } from "react-icons/bs"
import { GrLinkedin, GrMap } from "react-icons/gr"

import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";


export default function Features() {
  return (
    <div>
      <div class="card text-center w-100">
        <div class="card-header d-flex justify-content-start">
          <div class="border-end w-50 d-flex justify-content-around align-items-center">
            <Card.Img
              class="rounded-circle"
              variant="top"
              style={{ width: "5rem" }}
              src={Perfilpng}
            />
            <Badge bg="dark">
              <div class="text-start">
                <p class="fs-6 fw-lighter">
                Glaucio Castilho
                </p>
                Dev Web <BsCodeSlash/>
              </div>
            </Badge>
          </div>
          <div class=" w-50 d-flex justify-content-around align-items-center">
          <Badge bg="dark text-start p-2">
            <a class="bg-transparent text-decoration-none fw-semibold fs-6" href="https://www.instagram.com/glauciocastilho1/" target="_blank"><BsInstagram/> Instagram</a>
            <br/>
            <br/>
            <a class="bg-transparent text-decoration-none fw-semibold fs-6" href="https://www.linkedin.com/in/glaucio-castilho-361505242/" target="_blank"><GrLinkedin/> LinkedIn</a>
          </Badge>
          </div>
        </div>
        <div class="card-body w-100">
          <h5 class="card-title">
          Destaque
          </h5>
          <p class="card-text">
          Digite uma descrição aqui! Digite uma descrição aqui! Digite uma descrição aqui!
            Digite uma descrição aqui! Digite uma descrição aqui! Digite uma descrição aqui!
            Digite uma descrição aqui! Digite uma descrição aqui! Digite uma descrição aqui!
            Digite uma descrição aqui! Digite uma descrição aqui! Digite uma descrição aqui!
          </p>
          <a href="Contato" class="btn btn-primary">
            Contato
          </a>
        </div>
        <div class="card-footer text-muted">Ultima atualização 18/09/22</div>
      </div>
    </div>
  );
}
