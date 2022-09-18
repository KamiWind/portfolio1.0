/*  |--------------| IMPORT  ESSENCIAIS |--------------|*/

import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

/*  |--------------| IMPORT DE PAGINAS |--------------|*/

import Inicio from "./Pages/Inicio"
import Projetos from "./Pages/Projetos"
import Contato from "./Pages/Contato"


export default function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="Projetos" element={<Projetos />} />
          <Route path="Contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}