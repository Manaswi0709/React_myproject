import React from 'react';
import { RTO } from './RTO';
export const Navbar2=()=>{
    return(
        <> 
        <RTO/>
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">ADMIN</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/AdminRC">RC</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/AdminLicense">LICENSE</a>
              </li>


              <li className="nav-item">
                <a className="nav-link" href="/AdminPermit">PERMIT</a>
              </li>

                <li className="nav-item">
                  <a className="nav-link" href="/Report">REPORT</a>
                </li>

              <li className="nav-item">
                <a className="nav-link" href="/AdminLogin">LOG OUT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
    );
}

export default Navbar2;