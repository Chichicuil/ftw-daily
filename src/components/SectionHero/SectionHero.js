import React from 'react';
import { string } from 'prop-types';
import Image1 from '../../assets/HeaderDog.jpeg';
import { MDBAnimation } from "mdbreact";
const SectionHero = props => {

  return (
<MDBAnimation type="fadeIn" duration="2s">
  <div className="jumbotron pl-0 pt-0">
    <div className="row ">
      <div className="col-md-7">
        <img className="img-fluid" alt="Responsive"  src={Image1}></img>
      </div>
      <div className="col-md-5 d-flex align-middle flex-column align-items-center justify-content-center fadeInDown">
        <h1>&quot;La forma más fácil y segura <br></br>de encontrar a tu mejor amigo&quot;</h1>
        <button className="btn btn-lg  peach-gradient">Buscar Cachorros</button>
      </div>
    </div>
  </div>
  </MDBAnimation>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
