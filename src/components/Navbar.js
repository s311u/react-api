import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return(
    <header class="c-header">
      <nav class="navbar navbar-default">
        <div class="container">
              <span class="nav-item">
              <Link className="nav-Link" to="/">HOME</Link>
              </span>
              <span class="nav-item">
              <a target="_blank" href="https://s311u.github.io/SK_resume/html/contact.html">ABOUT US</a>
              </span>
              <span class="nav-item">
              <Link className="nav-Link" to="/characters">QUOTES BY CHARACTER</Link>
              </span>
        </div>
      </nav>
    </header>

 )
}

