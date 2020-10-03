import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '../../components';

import css from './SectionHero.css';
import { right } from 'inquirer/lib/utils/readline';

const SectionHero = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  const StylePadding = {
    padding: "15px",
  }; 

  return (
    <div className={classes}>  
       <div className={css.heroContent}>
         <h1 className={css.heroMainSloganTitle}>
          &quot;<FormattedMessage id="SectionHero.title" />
        </h1>
        <h1 className={css.heroMainSlogan2}>
          <FormattedMessage id="SectionHero.title2" />&quot;
        </h1>
        <h5 className={css.heroSubTitle}>
          <FormattedMessage id="SectionHero.subTitle" />
        </h5>
        <NamedLink
          name="SearchPage"
          to={{
            search:
              'address=Finland&bounds=70.0922932%2C31.5870999%2C59.693623%2C20.456500199999937',
          }}
          className={css.heroButtonCustom} style= {StylePadding}
        >
          <FormattedMessage id="SectionHero.browseButton" />
        </NamedLink>
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
