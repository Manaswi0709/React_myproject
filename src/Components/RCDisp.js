import React from 'react';
import Navbar from './Navbar';
export const RCDisp=()=>{
    return(
       <div>
  <Navbar/>
          
  <h1>RC</h1>
  <div className="container">
    
    <table>
      <thead>
      <tr>
        <th>S no.</th>
        <th>Vehicle no.</th>
        <th>view</th>
      </tr>
      </thead>
      <tbody>

      <tr><td>1.</td><td>XXXXXXXX</td><td><u>RC 1</u></td></tr>
      <tr><td>2.</td><td>XXXXXXXX</td><td><u>RC 2</u></td></tr>
      <tr><td>3.</td><td>XXXXXXXX</td><td><u>RC 3</u></td></tr></tbody>
    </table></div>
 </div>
 
    );
}
export default RCDisp;