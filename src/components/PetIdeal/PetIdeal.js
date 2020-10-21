import React from 'react';

import Image4 from '../../assets/PetIdeal2.jpeg';



const PetIdeal = props => {
          return (
            <div className="container-fluid">
            <div className="row">
            <div className="col-md-6">
                <img className="img-fluid" alt="Responsive" src={Image4}></img>
              </div>
              <div className="col-md-6 text-center">

                <h1>ENCUENTRA TU PET IDEAL</h1>
                <button type="button"className="btn btn-danger">HACER EL TEST </button>
       
              </div>
            </div>
          </div>
      
          );
        };

export default PetIdeal;