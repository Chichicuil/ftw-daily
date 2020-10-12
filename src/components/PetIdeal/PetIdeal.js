import React from 'react';
import css from './PetIdeal.css';
import './Custom.css';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '..';


const PetIdeal = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  const StylePadding = {
    padding: "15px",
  }; 

    return (
      <div class="jumbotron jumbotron-fluid" className={css.jumbotron}>
          <div class="container">
              <div class="row mt-5">
                  <div class="col-6">
                    {/* Video va aqui */}
                  </div>
                  <div class="col-6 d-flex flex-column justify-content-center customBorder mt-5">
                      <h1 class="align-self-center">TU PET IDEAL</h1>
                      <p class="text-center text-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      </p>
                      <button type="button" class="btn btn-primary btn-lg">
                        INICIAR TEST
                      </button>
                </div>
              </div>
            </div>
        </div>
    );
  };

export default PetIdeal;