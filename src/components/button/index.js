import React from 'react';
import PropTypes from 'prop-types';
import { ArrowIcon } from '../../assets/arrowIcon';

import { CustomButton } from './styles';

export const Button = ({ className, label, type }) => (
  <CustomButton className={className}>
    {label}
    {type === 'arrow' && (<ArrowIcon />)}
  </CustomButton>
);

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  type: undefined,
};
