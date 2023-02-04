import React from 'react';
import Navbar from './Navbar';
export const LicenseApp=()=>{
    return(
      <div> 
        <Navbar/>
    <h1>License Application</h1>
    <div className="container">
    <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Full name</label>
          <input type="text" className="form-control" id="name"/>
        </div>
        <br/>
        <div className="col-6">
          <label htmlFor="name" className="form-label">D/O-S/O</label>
          <input type="text" className="form-control" id="name"/>
        </div>     
        
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input type="text" className="form-control" id="inputCity"/>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">State</label>
          <select id="inputState" className="form-select">
            <option value>Choose...</option>
            <option></option>
          </select>
        </div>

        <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">Category</label>
            <select id="inputState" className="form-select">
              <option value>Choose...</option>
              <option>With gear</option>
              <option>Without gear</option>
            </select>
          </div>
        
        <div className="col-md-6">
        <label htmlFor="birthday">Date of Birth:</label>
        <input type="date" id="birthday" name="birthday"/>
        </div><br/>

        <div className="col-md-6">
            <label htmlFor="birthday">Date of Request:</label>
            <input type="date" id="birthday" name="birthday"/>
            </div><br/>

        Aadhar file:
        <div className="input-group mb-3">
            <input type="file" className="form-control" id="inputGroupFile02"/>
            <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
          </div>
          <br/><br/>
        Image file:
        <div className="input-group mb-3">
            <input type="file" className="form-control" id="inputGroupFile02"/>
            <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
          </div>

        
      </form>
      <div className="col-12">
        <a href="/Navbar">
        <button type="submit" className="btn btn-primary">Submit</button>
      </a>
      </div> 
    </div>  
</div>
    );
}

export default LicenseApp;
