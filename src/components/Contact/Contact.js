import React from 'react';
import css from './Contact.css';
import classNames from 'classnames';


const Contact = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  const StylePadding = {
    padding: "15px",
  }; 

    return (
      <div class="jumbotron">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-md-3 text-center">
                    <h1>Contact Us</h1>
                    <hr class="my-1"></hr>
                    <p>(+1) 615-718-7142</p>
                    <p>Or</p>
                    <p>hello@puppyco.mx</p>
                    <p>Or</p>
                    <p>Social Media Icons</p>
                  </div>
                  <div class="col-md-6 card bg-primary text-center">
                    <h1 class="white-text text-center">Contáctanos</h1>
                    <hr class="my-1 mb-4"></hr>
                    <form className="md-form card-body px-lg-5 pt-0">
                      <div class="form-row my-2">
                        <div class="col-md-6 p-2">
                          <input type="text" class="form-control white-text" id="materialContactFormName" required></input>
                          <label className="white-text" for="materialContactFormName">Nombre</label>
                        </div>
                        <div class="col-md-6 p-2">
                          <input type="text" class="form-control white-text" id="materialContactFormEmail" required></input>
                          <label className="white-text" for="materialContactFormEmail">Email</label>
                        </div>
                      </div>
                      <div className="col-md-12 pt-3">
                      <textarea type="text" id="materialContactFormMessage" class="form-control md-textarea white-text" rows="3" required></textarea>
                      <label className="white-text" for="materialContactFormMessage">Mensaje</label>
                      </div>
                      <button type="submit" class="btn btn-warning btn-rounded btn-block z-depth-0 my-4 waves-effect">Send</button>
                    </form>
                  </div>
                <div class="col-md-3 text-center">
                    <h1>Address</h1>
                    <hr class="my-1"></hr>
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