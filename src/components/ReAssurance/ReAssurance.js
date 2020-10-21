import React from 'react';
import Image3 from '../../assets/Reassurance.jpeg';


const ReAssurance = props => {
  

    return (
      <div className="container-fluid">
      <div className="row">
      <div className="col-md-6">
          <img className="img-fluid"  alt="Responsive " src={Image3}></img>
        </div>
        <div className="col-md-6 text-center">
          <h1 className="text-center">RE-ASSURANCE</h1>
          <div className="container d-flex align-middle flex-column align-items-center p-5">
            <button type="button" className="btn btn-yellow w-50 mb-4">SIMPLE</button>
            <button type="button" className="btn btn-yellow w-50 mb-4">SEGURO</button>
            <button type="button" className="btn btn-yellow w-50 mb-4">GARANTIZADO</button>
          </div>     
        </div>
      </div>
    </div>

    );
  };

export default ReAssurance;