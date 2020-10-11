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
  <div>
    <div className={css.left}>
        <h1>Contact Us</h1>
        <hr></hr>
        <p>(+1) 615-718-7142</p>
        <p>Or</p>
        <p>hello@puppyco.mx</p>
        <p>Or</p>
        <p>Social Media Icons</p>
    </div>
    <div className={css.center}>
        <h1>Get In Touch</h1>
        <hr></hr>
        <form>
            <p>Enter your name:</p>
            <input
                type='text'
                name='username'
            />
            <p>Enter your age:</p>
            <input
                type='text'
                name='age'
            />
            <p>Message</p>
            <input
                type='text'
                name='age'
            />
            <button>Contact</button>
        </form>
    </div>
    <div className={css.right}>
        <h1>Address</h1>
        <hr></hr>
        <p>8001 Burgoyne Rd. Apt #3b <br></br>HOUSTON, TX. 77063</p>
        <p>Or</p>
        <p>Av. Eugenio Garza Sada #1025<br></br>MONTERREY, NL. 78450</p>
    </div>
  </div>

    );
  };

export default Contact;