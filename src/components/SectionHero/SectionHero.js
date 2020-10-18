import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '..';
import Image1 from '../../assets/HeaderDog.jpeg';

import css from './SectionHero.css';
import { right } from 'inquirer/lib/utils/readline';

const SectionHero = props => {
  const { rootClassName, className } = props;

  return (

  <div className="container-fluid">
    <div className="row">
      <div className="col-6">
        <img className="img-fluid" src={Image1}></img>
      </div>
      <div className="col-6 text-center">
        <h1>SLOGAN</h1>
      </div>
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
