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
            <h1>¿Cómo Funciona?</h1>
            <div class="d-flex flex-column pr-5">
            <button type="button" class="btn btn-primary btn-lg mb-3">Escoge Tu Puppy</button>
            <button type="button" class="btn btn-primary btn-lg mb-3">Pago Seguro</button>
            <button type="button" class="btn btn-primary btn-lg">Selecciona tu envio</button>
            </div>
          </div>
        </div>

    );
  };

export default ComoFunciona;