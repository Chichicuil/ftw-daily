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
<<<<<<< Updated upstream
                <button type="button"class="btn btn-danger">HACER EL TEST </button>
=======
                <button type="button"className="btn btn-primary"data-toggle="modal" data-target="#centralModalSm">HACER EL TEST </button>
                <div class="modal fade" id="centralModalSm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                  <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>

                  </div>
>>>>>>> Stashed changes
              </div>
            </div>
          );
        };

export default PetIdeal;