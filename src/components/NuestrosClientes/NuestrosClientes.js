import React from 'react';
import css from './NuestrosClientes.css';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '..';

const NuestrosClientes = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  const StylePadding = {
    padding: "15px",
  }; 

    return (
    <div className="container d-flex align-middle flex-column align-items-center justify-content-center mb-5 mt-5">
          <h1>
          -NUESTROS CLIENTES-
          </h1>
          <h2>
          <i className="fas fa-grip-lines deep-orange-text"></i>
          </h2>

          <p class="h5 text-center justify-content-center">Lorem ipsum dolor sit amet,<br></br>consectetur adipiscing elit, sed do eiusmod tempor</p>
          <h1 class="display-3">
          <i class="fas fa-quote-left"></i>
          </h1>
          <p class="h3 mt-8 ml-1 px-2 text-center"> Lorem ipsum dolor sit amet,<br></br>consectetur adipiscing elit, sed do eiusmod tempor</p>
         
        </div>
    );
  };
 
export default NuestrosClientes;