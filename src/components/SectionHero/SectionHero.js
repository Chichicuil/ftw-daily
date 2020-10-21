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

  <div className="jumbotron ">
    <div className="row ">
      <div className="col-md-7">
        <img className="img-fluid" alt="Responsive image"  src={Image1}></img>
      </div>
      <div className="col-md-5 d-flex align-middle flex-column align-items-center justify-content-center">
        <h1>&quot;La forma más fácil y segura <br></br>de encontrar a tu mejor amigo&quot;</h1>
        <button className="btn btn-lg  peach-gradient">Buscar Cachorros</button>
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
