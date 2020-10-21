import React from 'react';


const Contact = props => {

    return (
      <div className="container">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-md-3 text-center">
                    <h1>Contact Us</h1>
                    <hr className="my-1"></hr>
                    <p>(+1) 615-718-7142</p>
                    <p>Or</p>
                    <p>hello@puppyco.mx</p>
                    <p>Or</p>
                    <p>Social Media Icons</p>
                  </div>
                  <div className="col-md-6 card bg-primary text-center">
                    <h1 className="white-text text-center">Contáctanos</h1>
                    <hr className="my-1 mb-4"></hr>
                    <form className="md-form card-body px-lg-5 pt-0">
                      <div className="form-row my-2">
                        <div className="col-md-6 p-2">
                          <input type="text" className="form-control white-text" id="materialContactFormName" required></input>
                          <label className="white-text" htmlFor="materialContactFormName">Nombre</label>
                        </div>
                        <div className="col-md-6 p-2">
                          <input type="text" className="form-control white-text" id="materialContactFormEmail" required></input>
                          <label className="white-text" htmlFor="materialContactFormEmail">Email</label>
                        </div>
                      </div>
                      <div className="col-md-12 pt-3">
                      <textarea type="text" id="materialContactFormMessage" className="form-control md-textarea white-text" rows="3" required></textarea>
                      <label className="white-text" htmlFor="materialContactFormMessage">Mensaje</label>
                      </div>
                      <button type="submit" className="btn btn-warning btn-rounded btn-block z-depth-0 my-4 waves-effect">Send</button>
                    </form>
                  </div>
                <div className="col-md-3 text-center">
                    <h1>Address</h1>
                    <hr className="my-1"></hr>
                    <p>8001 Burgoyne Rd. Apt #3b<br></br>Houston, TX. 77063</p>
                    <p><i>Or</i></p>
                    <p>Av. Eugenio Garza Sada #1025 <br></br>MONTERREY, NL. 78450</p>
                  </div>
              </div>
            </div>
        </div>

    );
  };

export default Contact;