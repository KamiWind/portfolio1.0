/*--------- Módulos ---------*/
import { React, Fragment } from "react";
import "../styles/Inicio.scss";

/*--------- Componentes ---------*/
import Perfil from "../Components/Perfil";
import Features from "../Components/Features";
import AboutMe from "../Components/AboutMe";

import Stack from "react-bootstrap/Stack"



export default function Inicio() {

  return (
    <Fragment>
      <div>
        <nav class="navbar navbar-dark bg-dark d-flex justify-content-center">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />
                </svg>{" "}
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Projetos">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-code-slash"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                </svg>{" "}
                Projetos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Contato">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>{" "}
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="d-flex flex-direction-between justify-content-around flex-wrap">
        <div className="my-3 order-xl-1">


          
          <Perfil
          Name="Glaucio Castilho"
          Description=
              "Desde o primeiro contato com o desenvolvimento web eu me
              apaixonei, e desde então eu estudo diariamente para melhorar meu
              aprendizado e assim conseguir meu primeiro emprego como
              desenvolvedor web."
          />
        </div>
        <div className="my-3 order-last order-xl-2">




          <Features 
          Name="Glaucio Castilho"
          NameDescription="Dev Web"
          Description="Localidades"
          SubDescription="Ainda irei editar esta parte!"
          />
          </div>
        <div className="my-3 order-xl-2">



          <AboutMe
          Title="Algumas Caracteristicas!"
          Description=
          "Sou um garoto desenvolvedor que esta entrando nessa área a pouco
          tempo. estudo dev. web desde 24/03/22, e domino o básico de HTML,
          CSS, JavaScript, React, Bootstrap e Sass. Estudo diariamente para
          se tornar um dev melhor, eu acredito que conseguindo um emprego
          como dev será muito desafiador e também ira me trazer muito mais
          aprendizado. Seria um prazer trabalhar com você ou para você!
          Entre em Contato comigo para conversar sobre. "
          LinkMessage="Click aqui!"
          />


        </div>
      </div>
    </Fragment>
  );
}
