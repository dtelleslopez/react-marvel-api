import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper, Card, Thumbnail, Content, Name, Description, ReadMore,
} from './styles';

export const ListItem = ({ name, description, thumbnail: { path, extension } }) => (
  <Wrapper>
    <Card>
      <Thumbnail path={`${path}.${extension}`} />
      <Content>
        <Name>{name}</Name>
        <Description empty={description.length === 0}>
          {description.length === 0 ? '(No description available)' : description}
        </Description>
        <ReadMore label="Read more" type="arrow" />
      </Content>
    </Card>
  </Wrapper>
);

ListItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.shape({
    path: PropTypes.string,
    extension: PropTypes.string,
  }),
};

ListItem.defaultProps = {
  name: '',
  description: '',
  thumbnail: {},
};
