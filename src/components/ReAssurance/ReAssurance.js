import React from 'react';
import css from './ReAssurance.css';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '..';


const ReAssurance = props => {
  const { rootClassName, className } = props;

    return (
      <div class="jumbotron jumbotron-fluid" className={css.jumbotron}>
          <div class="container" className={css.marginSection}>
            <h1>RE-ASSURANCE</h1>
            <div class="d-flex flex-column pr-5">
            <button type="button" class="btn btn-primary btn-lg mb-3">SIMPLE</button>
            <button type="button" class="btn btn-primary btn-lg mb-3">SEGURO</button>
            <button type="button" class="btn btn-primary btn-lg">GARANTIZADO</button>
            </div>
          </div>
        </div>

    );
  };

export default ReAssurance;