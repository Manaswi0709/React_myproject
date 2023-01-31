import React from 'react';
import { RTO } from './RTO';
export const Navbar=()=>{
    return(
      <>
      <RTO/>
      
  
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">USER</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"  data-bs-toggle="dropdown" >
                      Vehicle registration
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/RCApp">REGISTER</a></li>
                      <li><a className="dropdown-item" href="RCDisp">LIST</a></li>
                      <li><hr className="dropdown-divider"></hr></li>
                      <li><div class="w3-container">
 <button onclick="document.getElementById('id01').style.display='block'">Application status</button>
  <div id="id01" class="w3-modal">
    <div class="w3-modal-content">
      <header class="w3-container w3-teal"> 
        <span onclick="document.getElementById('id01').style.display='none'" 
        class="w3-button w3-display-topright">&times;</span>
        <h2>Application status</h2>
      </header>
      <div class="w3-container">
        <p>Application no.</p>
        <p>Pending...</p>
      </div>
    </div>
  </div>
</div></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"  data-bs-toggle="dropdown" >
                      Permit
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/PermitApp">REGISTER</a></li>
                      <li><a className="dropdown-item" href="/PermitDisp">LIST</a></li>
                      <li><hr className="dropdown-divider"></hr></li>
                      <li><a className="dropdown-item" href="#">Apllication status</a></li>
                    </ul>
                  </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  License
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/LicenseApp">REGISTER</a></li>
                  <li><a className="dropdown-item" href="/LicenseDisp">LIST</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="#">Application status</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/Login">LOG OUT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
        );
}
    
export default Navbar;

    