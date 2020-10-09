import React from 'react';
import css from './ComoFunciona.css';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '..';


const ComoFunciona = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  const StylePadding = {
    padding: "15px",
  }; 

    return (
  <div className={classes}>  
    <div className={css.comoFuncionaContent}> 
      <h1 className={css.comoFuncionaTitle}>
        ¿CÓMO FUNCIONA?
      </h1>
      <div className={css.rightAdjButtons}>
      <button className={css.comoFuncionaButtonCustom}>ESCOGE TU PUPPY</button>
      <button className={css.comoFuncionaButtonCustom}>PAGO SEGURO</button>
      <button className={css.comoFuncionaButtonCustom}>SELECCIONA TU ENVIO</button>
      </div>
    </div>
  </div>

    );
  };

export default ComoFunciona;