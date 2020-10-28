import React from 'react';

import Image4 from '../../assets/PetIdeal2.jpeg';
import Quiz from 'react-quiz-component';



const PetIdeal = props => {
          return (
            <div className="container-fluid">
            <div className="row">
                <img className="img-fluid" alt="Responsive image" src={Image4}></img>
              </div>
              <div className="row d-flex align-middle flex-column align-items-center">
                <h1>ENCUENTRA TU PET IDEAL</h1>
                <button type="button"class="btn btn-danger">HACER EL TEST </button>
              </div>
            </div>
          );
        };

export default PetIdeal;