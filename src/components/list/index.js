import React from 'react';
import PropTypes from 'prop-types';
import { Loading } from '../loading';

import { Container, Paragraph } from './styles';

export const List = ({ children, loading }) => (
  <Container>
    {loading && (<Loading />)}
    {children}
    {!loading && children.length === 0 && (<Paragraph>No results :(</Paragraph>)}
  </Container>
);

List.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

List.defaultProps = {
  loading: false,
};
