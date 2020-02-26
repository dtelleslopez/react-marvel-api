import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export const List = ({ children }) => (
  <Container>
    {children}
  </Container>
);

List.propTypes = {
  children: PropTypes.node.isRequired,
};
