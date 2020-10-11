import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '..';

import css from './SectionHero.css';
import { right } from 'inquirer/lib/utils/readline';

const SectionHero = props => {
  const { rootClassName, className } = props;

  return (

  <div class="jumbotron jumbotron-fluid" className={css.jumbotron}>
    <div class="container" className={css.marginSection}>
      <h1>&quot;La forma más fácil y segura <br /> de encontrar a tu mejor amigo&quot;</h1>
      <h1 class="mt-0">-PuppyCo-</h1>
      <button type="button" class="btn btn-primary btn-lg">Buscar Cachorros</button>
    </div>
  </div>

  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
