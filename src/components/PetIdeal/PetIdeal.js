import React from 'react';
import css from './PetIdeal.css';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '..';


const PetIdeal = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  const StylePadding = {
    padding: "15px",
  }; 

    return (
  <div className={classes}>  
    <div className={css.heroContent}>
      <h1 className={css.heroMainSloganTitle}>
        COMO FUNCIONA?
      </h1>
      <button className={css.heroButtonCustom}>ESCOGE TU PUPPY</button>
      <button className={css.heroButtonCustom}>PAGO SEGURO</button>
      <button className={css.heroButtonCustom}>SELECCIONA TU ENVIO</button>
    </div>
  </div>

    );
  };

export default PetIdeal;