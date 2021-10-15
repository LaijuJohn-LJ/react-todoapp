import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";

export default function header() {
 return (
  <header>
   <Link to="/">Home</Link>
   <Link to="/About">About</Link>
   <Link to="/Contact">Contact</Link>
  </header>
 )
};
