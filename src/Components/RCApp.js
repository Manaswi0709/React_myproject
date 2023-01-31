import React from 'react';
//import logo from '../../src/logo192.png'
import Navbar from './Navbar';
export const RCApp=()=>{
    return(
    <div>
      <Navbar/>
    {/* <img src={logo} alt="img here"/> */}
    <h1>RC Application</h1>
    <div className="container">
    <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Owner name</label>
          <input type="text" className="form-control" id="name"></input>
        </div>
        <br></br>
        <div className="col-6">
          <label htmlFor="name" className="form-label">Vehicle Model</label>
          <input type="text" className="form-control" id="name"></input>
        </div>     
        <div className="col-6">      
          <label htmlFor="name" className="form-label">Vehicle class</label>      
          <input type="text" className="form-control" id="name"></input>
        </div>
        <div className="col-6">
            <label htmlFor="name" className="form-label">Engine no.</label>
            <input type="text" className="form-control" id="name"></input>
          </div>

          <div className="col-6">
            <label htmlFor="name" className="form-label">Veicle color</label>
            <input type="text" className="form-control" id="name"></input>
          </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input type="text" className="form-control" id="inputCity"></input>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">State</label>
          <select id="inputState" className="form-select">
            <option value>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="name" className="form-label">Fuel Used</label>
          <input type="text" className="form-control" id="name"></input>
        </div>
        
        <div className="col-md-6">
        <label htmlFor="birthday">Date of Birth:</label>
        <input type="date" id="birthday" name="birthday"></input>
        </div><br></br>

        <div className="col-md-6">
            <label htmlFor="birthday">Date of Registration:</label>
            <input type="date" id="birthday" name="birthday"></input>
            </div><br></br>

        <h6>Aadhar file:</h6>
        <div className="input-group mb-3">
            <input type="file" className="form-control" id="inputGroupFile02"></input>
            <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
          </div>
          <br></br><br></br>
          <h6>Image file:</h6>
        <div className="input-group mb-3">
            <input type="file" className="form-control" id="inputGroupFile02"></input>
            <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
          </div>

       
       
      </form>
      <div className="col-12">
        <a href="user.html">
        <button type="submit" className="btn btn-primary">Submit</button>
      </a>
    </div>
  </div>
  </div>
     

);
}

export default RCApp ;