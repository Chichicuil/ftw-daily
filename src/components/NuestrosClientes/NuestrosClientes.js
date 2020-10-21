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
  <div className={classes}>  
    <div className={css.nuestrosClientesContent}>
      <h1 className={css.nuestrosClientesTitle}>
        -NUESTROS CLIENTES-
      </h1>
      <h2 className={css.gripLines}>
      <i class="fas fa-grip-lines"></i>
      </h2>
      <h3 className ={css.nuestrosClientesSmallText}>
     <p>Lorem ipsum dolor sit amet,<br></br>consectetur adipiscing elit, sed do eiusmod tempor</p>
     </h3>
    <h5 className={css.nuestrosClientesBigText}>
    <p>Lorem ipsum dolor sit amet,<br></br>consectetur adipiscing elit, sed do eiusmod tempor</p>
    </h5>
  </div>
  </div>
    );
  };
 
export default NuestrosClientes;