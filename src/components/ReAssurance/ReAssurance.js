import React from 'react';
import css from './ReAssurance.css';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '..';


const ReAssurance = props => {
  const { rootClassName, className } = props;

    return (
      <div class="jumbotron jumbotron-fluid" className={css.jumbotron}>
          <div class="container-fluid">
            <div class="row">
              <div class="col-6">

              </div>
              <div class="col-6 mt-5 align-content-center">
              <h1 class="text-center mt-5">RE-ASSURANCE</h1>
              <div class="container d-flex flex-column w-50">
                <button type="button" className={css.buttonReAssuranceCustom}>SIMPLE</button>
                <button type="button" className={css.buttonReAssuranceCustom}>SEGURO</button>
                <button type="button" className={css.buttonReAssuranceCustom}>GARANTIZADO</button>
              </div>
              </div>
            </div>
          </div>
        </div>

    );
  };

export default ReAssurance;