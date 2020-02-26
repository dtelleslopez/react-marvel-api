import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper, Card, Preview, Content, Name, Description,
} from './styles';

export const ListItem = ({ name, description }) => (
  <Wrapper>
    <Card>
      <Preview />
      <Content>
        <Name>{name}</Name>
        <Description empty={description.length === 0}>
          {description.length === 0 ? '(No description available)' : description}
        </Description>
      </Content>
    </Card>
  </Wrapper>
);

ListItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

ListItem.defaultProps = {
  name: '',
  description: '',
};
