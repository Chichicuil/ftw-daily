import React from 'react';
import css from './Contact.css';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '..';


const Contact = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  const StylePadding = {
    padding: "15px",
  }; 

    return (
      <div class="jumbotron jumbotron-fluid" className={css.jumbotron}>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-3 text-center">
                    <h1>Contact Us</h1>
                    <hr class="my-1"></hr>
                    <p>(+1) 615-718-7142</p>
                    <p>Or</p>
                    <p>hello@puppyco.mx</p>
                    <p>Or</p>
                    <p>Social Media Icons</p>
                  </div>
                  <div class="col-6 text-center bg-primary">
                    <h1 class="text-light">Get In Touch</h1>
                    <hr class="my-1 mb-4"></hr>
                    <form>
                      <div class="form-row my-2">
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Your name"></input>
                        </div>
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Email"></input>
                        </div>
                      </div>
                      <div class="form-row my-2">
                      <textarea type="text" name="message" class="form-control" placeholder="Write your message.." required></textarea>
                      </div>
                      <button type="submit" class="btn btn-md btn-light align-self-center shadow my-1">Send</button>
                    </form>
                  </div>
                <div class="col-3 text-center">
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