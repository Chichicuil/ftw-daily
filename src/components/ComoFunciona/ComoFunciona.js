import React from 'react';
import Image2 from '../../assets/ComoFunciona.jpeg';

const ComoFunciona = props => {

    return (
      <div className="jumbotron">
        <div className="row ">
          <div className="col-md-6">
            <img className="img-fluid" alt="Responsive" src={Image2}></img>
          </div>
          <div className="col-md-6  d-flex align-middle flex-column align-items-center justify-content-center" >
            <h1 className="text-center">¿CÓMO FUNCIONA?</h1>
              <button type="button" class="btn blue-gradient btn-lg w-50 mb-4">ESCOGE TU PUPPY</button>
              <button type="button" class="btn blue-gradient btn-lg w-50 mb-4">PAGO SEGURO</button>
              <button type="button" class="btn blue-gradient btn-lg w-50 mb-4">SELECCIONA TU PAGO</button>
          </div>
        </div>
    </div>
    );
  };
export default ComoFunciona;