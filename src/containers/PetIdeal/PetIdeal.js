import React from 'react';


import Image4 from '../../assets/PetIdeal2.jpeg';



const PetIdeal = props => {

          return (
            <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <img className="img-fluid" alt="Responsive" src={Image4}></img>
              </div>
              <div className="col-6 text-center">
                <h1>Re-Assurance</h1>
              </div>
            </div>
          </div>
      
          );
        };

export default PetIdeal;