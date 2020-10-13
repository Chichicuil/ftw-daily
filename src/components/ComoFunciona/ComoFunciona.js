import React from 'react';
import css from './ComoFunciona.css';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '..';


const ComoFunciona = props => {
  const { rootClassName, className } = props;

    return (
      <div class="jumbotron jumbotron-fluid" className={css.jumbotron}>
          <div class="container" className={css.marginSection}>
            <h1>¿CÓMO FUNCIONA?</h1>
            <div class="d-flex flex-column pr-5">
            <button type="button" className={css.buttonCfCustom}>ESCOGE TU PUPPY</button>
            <button type="button" className={css.buttonCfCustom}>PAGO SEGURO</button>
            <button type="button" className={css.buttonCfCustom}>SELECCIONA TU ENVIO</button>
            </div>
          </div>
        </div>

    );
  };

export default ComoFunciona;