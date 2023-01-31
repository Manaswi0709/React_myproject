import React from 'react';
import Navbar2 from './Navbar2';
export const Report=()=>{
    return(
        <>
 <Navbar2/>
    <div className="container">
    <h1>REPORT</h1><br/><br/>
    <div className="card" >
    <h2>Registrations</h2>
    <div className="col-md-6">
        <label htmlFor="date">From:</label>
        <input type="date" id="date" name="birthday"/>
        <label htmlFor="date">To:</label>
        <input type="date" id="date" name="birthday"/>
        </div><br/>

        <div >--------------</div>
    </div><br/><br/>

    <div className="card" >
        <h2>No. of vehicles</h2>
            <div >--------------</div>
        </div><br/><br/>

    <div>
        <div className="d-flex flex-column gap-4">
            <form className="d-flex">
              <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
        <table>
            <thead>
            <tr>
              <th>S no.</th>
              <th>Vehicle no.</th>
              <th>Chassis no.</th>
              <th>Vehicle model</th>
              <th>Vehicle year</th>
              <th>Validity</th>
            </tr></thead>
            <tbody>
    
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            </tbody>
          </table>
          
        </div>
        
    </div><br/><br/>
    <div >
        <input type="submit" className="btn btn-info" value="UPLOAD"/>
    </div>
</div>

    
</>
);
}

export default Report;