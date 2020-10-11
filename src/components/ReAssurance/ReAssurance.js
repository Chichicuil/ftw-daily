import React from 'react';
import css from './ReAssurance.css';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '..';


const ReAssurance = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  const StylePadding = {
    padding: "15px",
  }; 

    return (
  <div className={classes}>  
    <div className={css.reAssuranceContent}> 
      <h1 className={css.reAssuranceTitle}>
        RE-ASSURANCE
      </h1>
      <div className={css.rightAdjButtons}>
      <button className={css.reAssuranceButtonCustom}>SIMPLE</button>
      <button className={css.reAssuranceButtonCustom}>SEGURO</button>
      <button className={css.reAssuranceButtonCustom}>GARANTIZADO</button>
      </div>
    </div>
  </div>

    );
  };

export default ReAssurance;