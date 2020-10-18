import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';

import Image4 from '../../assets/PetIdeal2.jpeg';



const PetIdeal = props => {
  const { rootClassName, className } = props;

          return (
            <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <img className="img-fluid" src={Image4}></img>
              </div>
              <div className="col-6 text-center">

                <h1>ENCUENTRA TU PET IDEAL</h1>
                <button type="button"class="btn btn-danger">HACER EL TEST </button>
       
              </div>
            </div>
          </div>
      
          );
        };

export default PetIdeal;