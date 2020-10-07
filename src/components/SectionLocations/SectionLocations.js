import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import SLP1 from './images/SLP1.jpg';
import SLP2 from './images/SLP2.jpg';
import SLP3 from './images/SLP3.jpg';
import VerifyIcon from './images/VerifyIcon.svg';
import FastDelivery from './images/fast-delivery.svg';
import Certificate from './images/certificate.svg';
class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <h1>Iconos 3</h1>
      </div>
      <div className={css.locationsCustom}>
        <ul className={css.ulCustomCenter}>
          <li className={css.liCustomCenter}>
            <img className={css.imgCustom} src={VerifyIcon}></img>
            <h2>Cachorros Asegurados</h2>
            <p>Llegan o te regresamos tu dinero.</p>
          </li>
          <li className={css.liCustomCenter}>
            <img className={css.imgCustom} src={FastDelivery}></img>
            <h2>Seguimiento de envío</h2>
            <p>Sigue el rastro de tu cachorro.</p>
          </li>
          <li className={css.liCustomCenter}>
            <img className={css.imgCustom} src={Certificate}></img>
            <h2>Criaderos reconocidos</h2>
            <p>Lo que pagas es lo que recibes.</p>
          </li>
        </ul>
      </div>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Helsinki',
          SLP1,
          '?address=Helsinki%2C%20Finland&bounds=60.2978389%2C25.254484899999966%2C59.9224887%2C24.782875800000056&origin=60.16985569999999%2C24.93837910000002'
        )}
        {locationLink(
          'Rovaniemi',
          SLP2,
          '?address=Rovaniemi%2C%20Finland&bounds=67.18452510000002%2C27.32667850000007%2C66.1553745%2C24.736871199999996&origin=66.50394779999999%2C25.729390599999988'
        )}
        {locationLink(
          'Ruka',
          SLP3,
          '?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
        )}
        {locationLink(
          'Rovaniemi',
          SLP2,
          '?address=Rovaniemi%2C%20Finland&bounds=67.18452510000002%2C27.32667850000007%2C66.1553745%2C24.736871199999996&origin=66.50394779999999%2C25.729390599999988'
        )}
        {locationLink(
          'Ruka',
          SLP3,
          '?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
        )}
        {locationLink(
          'Rovaniemi',
          SLP2,
          '?address=Rovaniemi%2C%20Finland&bounds=67.18452510000002%2C27.32667850000007%2C66.1553745%2C24.736871199999996&origin=66.50394779999999%2C25.729390599999988'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
