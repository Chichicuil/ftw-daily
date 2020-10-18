import React from 'react';
import css from './ComoFunciona.css';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '..';
import Image2 from '../../assets/ComoFunciona.jpeg';

const ComoFunciona = props => {
  const { rootClassName, className } = props;

    return (
      <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <img className="img-fluid" src={Image2}></img>
        </div>
        <div className="col-6 text-center">
          <h1>¿CÓMO FUNCIONA?</h1>
          <div class="d-flex align-items-center h-100">

          <button type="button" class="btn btn-primary">ESCOGE TU PUPPY</button>
          <button type="button" class="btn btn-primary">PAGO SEGURO</button>
          <button type="button" class="btn btn-primary">SELECCIONA TU PAGO</button>
          </div>

        </div>
      </div>
    </div>

    );
  };

export default ComoFunciona;