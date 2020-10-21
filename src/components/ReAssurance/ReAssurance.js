import React from 'react';
import Image3 from '../../assets/Reassurance.jpeg';


const ReAssurance = props => {
  const { rootClassName, className } = props;

    return (
      <div className="container-fluid">
      <div className="row ">
      <div className="col-md-6">
          <img className="img-fluid"  alt="Responsive image" src={Image3}></img>
        </div>
        <div className="col-md-6 text-center d-flex align-middle flex-column align-items-center justify-content-center">
          <h1 className="text-center">RE-ASSURANCE</h1>
            <button type="button" class="btn btn-lg btn-yellow w-50 mb-4">SIMPLE</button>
            <button type="button" class="btn btn-lg btn-yellow w-50 mb-4">SEGURO</button>
            <button type="button" class="btn btn-lg btn-yellow w-50 mb-4">GARANTIZADO</button>
    
        </div>
      </div>
    </div>

    );
  };

export default ReAssurance;