import { React, Fragment } from "react"
import ReactDOM from "react-dom"
import Rotas from "./Rotas"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import "./styles/index.scss"

import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { MdFullscreenExit } from "react-icons/md";



ReactDOM.render(
 
  <div>
     <div><Rotas /></div> 
  </div>,
  document.getElementById("root")
);