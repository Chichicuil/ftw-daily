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
        <div className="col-md-6">
          <img className="img-fluid" alt="Responsive image" src={Image2}></img>
        </div>
        <div className="col-md-6 p-5">
          <h1 className="text-center">¿CÓMO FUNCIONA?</h1>
          <div className="container d-flex align-middle flex-column align-items-center">
            <button type="button" class="btn blue-gradient w-50 mb-4">ESCOGE TU PUPPY</button>
            <button type="button" class="btn blue-gradient w-50 mb-4">PAGO SEGURO</button>
            <button type="button" class="btn blue-gradient w-50 mb-4">SELECCIONA TU PAGO</button>
          </div>
        </div>
      </div>
    </div>

    );
  };

export default ComoFunciona;