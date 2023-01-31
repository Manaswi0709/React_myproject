import React from 'react';
import Navbar2 from './Navbar2';
export const AdminPermit=()=>{
    return(
        <>
        <Navbar2/>
            <h1>PERMIT</h1>
<div className="container-fluid mt-3">
  
  <ul className="nav nav-tabs" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" data-bs-toggle="tab" href="#home">PENDING</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="tab" href="#menu1">APPROVED</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="tab" href="#menu2">REJECTED</a>
    </li>
  </ul>

 
  <div className="tab-content">
    <div id="home" className="container tab-pane active"><br/>
      <h3>Pending</h3>
      <table>
        <thead>
        <tr>
          <th>S no.</th>
          <th>Application no.</th>
          <th>Action</th>
        </tr></thead>
        <tbody>

        <tr><td>1.</td><td>XXXXXXXX</td><td>
            <button type="'button" className="btn btn-basic" data-bs-toggle="modal" data-bs-target="#myModal">Details</button>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Application no.</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                              <div className="mb-3">
                                <label className="form-label">Owner Name</label>
                                <input type="text" className="form-control" defaultValue="John"/>
                              </div> 
                              <div className="mb-3">
                                <label className="form-label">Vehicle no.</label>
                                <input type="text" className="form-control" defaultValue="XYZ"/>
                              </div> 
                            
                              <div className="mb-3">
                                <label className="form-label">From state</label>
                                <input type="text" className="form-control" defaultValue="ABC"/>
                              </div>  
                              <div className="mb-3">
                                <label className="form-label">To state</label>
                                <input type="text" className="form-control" defaultValue="123"/>
                              </div> 
                              <div className="mb-3">
                                <label className="form-label">Date of Birth</label>
                                <input type="text" className="form-control" defaultValue="dd/mm/yy"/>
                              </div> 

                              <div className="mb-3">
                                <label className="form-label">Date of registration</label>
                                <input type="text" className="form-control" defaultValue="dd/mm/yy"/>
                              </div>  
                              <div className="mb-3">
                                <label className="form-label">Aadhar link</label>
                                
                              </div>
                              <button type="submit" className="btn btn-primary">Approve</button>
                              <button type="submit" className="btn btn-danger">Reject</button>
                            </form>
                        </div>
                    </div>
                </div>
        </div></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr></tbody>
      </table>
    </div>
    <div id="menu1" className="container tab-pane fade"><br/>
      <h3>Approved</h3>
      <table>
        <thead>
        <tr>
          <th>S no.</th>
          <th>Application no.</th>
          <th>Details</th>
        </tr>
        </thead>
        <tbody>

        <tr><td></td><td></td><td>
          <button type="'button" className="btn btn-basic" data-bs-toggle="modal" data-bs-target="#myModal1">Details</button>
          <div className="modal" id="myModal1">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title">Application no.</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                      </div>
                      <div className="modal-body">
                          <form>
                            <div className="mb-3">
                              <label className="form-label">Owner Name</label>
                              <input type="text" className="form-control" defaultValue="John"/>
                            </div> 
                            <div className="mb-3">
                              <label className="form-label">Vehicle no.</label>
                              <input type="text" className="form-control" defaultValue="XYZ"/>
                            </div> 
                            
                            <div className="mb-3">
                              <label className="form-label">From state</label>
                              <input type="text" className="form-control" defaultValue="ABC"/>
                            </div>  
                            <div className="mb-3">
                              <label className="form-label">To state</label>
                              <input type="text" className="form-control" defaultValue="123"/>
                            </div> 
                            <div className="mb-3">
                              <label className="form-label">Date of Birth</label>
                              <input type="text" className="form-control" defaultValue="dd/mm/yy"/>
                            </div> 

                            <div className="mb-3">
                              <label className="form-label">Date of registration</label>
                              <input type="text" className="form-control" defaultValue="dd/mm/yy"/>
                            </div>  
                            <div className="mb-3">
                              <label className="form-label">Aadhar link</label>
                              
                            </div>
                            
                          </form>
                      </div>
                  </div>
              </div>
      </div>
        </td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr></tbody>
      </table>
    </div>
    <div id="menu2" className="container tab-pane fade"><br/>
      <h3>Rejected</h3>
      <table>
        <thead>
        <tr>
          <th>S no.</th>
          <th>Application no.</th>
          <th>Details</th>
        </tr></thead>
        <tbody>
        <tr><td></td><td></td><td>
          <button type="'button" className="btn btn-basic" data-bs-toggle="modal" data-bs-target="#myModal2">Details</button>
          <div className="modal" id="myModal2">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title">Application no.</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                      </div>
                      <div className="modal-body">
                          <form>
                            <div className="mb-3">
                              <label className="form-label">Owner Name</label>
                              <input type="text" className="form-control" defaultValue="John"/>
                            </div> 
                            <div className="mb-3">
                              <label className="form-label">Vehicle no.</label>
                              <input type="text" className="form-control" defaultValue="XYZ"/>
                            </div> 
                            
                            <div className="mb-3">
                              <label className="form-label">From state</label>
                              <input type="text" className="form-control" defaultValue="ABC"/>
                            </div>  
                            <div className="mb-3">
                              <label className="form-label">To state</label>
                              <input type="text" className="form-control" defaultValue="123"/>
                            </div> 
                            <div className="mb-3">
                              <label className="form-label">Date of Birth</label>
                              <input type="text" className="form-control" defaultValue="dd/mm/yy"/>
                            </div> 

                            <div className="mb-3">
                              <label className="form-label">Date of registration</label>
                              <input type="text" className="form-control" defaultValue="dd/mm/yy"/>
                            </div>  
                            <div className="mb-3">
                              <label className="form-label">Aadhar link</label>
                              
                            </div>
                          </form>
                      </div>
                  </div>
              </div>
      </div>
        </td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr></tbody>

      </table>
      
    </div>
    
      
  </div>
</div>


        </>
    );
}
export default AdminPermit;