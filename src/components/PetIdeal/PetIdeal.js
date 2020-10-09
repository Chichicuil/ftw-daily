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
    <div className={css.rightAdjCont}>
      <h1 className={css.heroMainSloganTitle}>
        TU PET IDEAL
      </h1>
      <p className={css.heroMainSloganTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <button className={css.heroButtonCustom}>INICIAR TEST</button>
    </div>
    </div>
  </div>
    );
  };

export default PetIdeal;