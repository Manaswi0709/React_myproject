import React from 'react';
export const Login=()=>{
    return(
      <>
      
<section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card bg-dark text-white">
            <div className="card-body p-5 text-center">
  
              <div className="mb-md-5 mt-md-4 pb-5">

                <div className="text-center">
                    {/* <img src="im.jpg" alt="logo"/> */}
                    <h2 className="mt-1 mb-5 pb-1">LOGIN</h2>
                  </div>
                <p className="text-white-50 mb-5">Please enter the details!</p>
  
                <div className="form-outline form-white mb-4">
                    <label className="form-label">User Id</label>
                  <input type="text" className="form-control form-control-lg" />
                  
                </div>
  
                <div className="form-outline form-white mb-4">
                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                  <input type="password" id="typePasswordX" className="form-control form-control-lg"></input>
                  
                </div>

              <a href="/Navbar">
                <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
              </a><br></br><br></br>

              <a href="signup.html">
                <h5>Sign up</h5>
              </a>

             
              </div>
            </div>
            <div>
                <a href="/AdminLogin">
                  <button>Admin</button>
                </a>
              </div>
    
          </div>
          
        </div>
        
      </div>
      
    </div>
  </section>
  </>
    );
}

