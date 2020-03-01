import React from 'react';
import PropTypes from 'prop-types';
import getThumbnailUrl from '../../helpers/getThumbnailUrl';

import {
  Wrapper, Card, Thumbnail, Content, Name, Description, ReadMore,
} from './styles';

export const ListItem = ({
  style, name, description, thumbnail: { path, extension }, urls,
}) => (
  <Wrapper style={style}>
    <Card>
      <Thumbnail path={`${path}.${extension}`} />
      <Content>
        <Name>{name}</Name>
        <Description empty={description.length === 0}>
          {description.length === 0 ? '(No description available)' : description}
        </Description>
        <ReadMore
          label="Read more"
          type="arrow"
          target="_blank"
          href={getThumbnailUrl(urls)}
        />
      </Content>
    </Card>
  </Wrapper>
);

ListItem.propTypes = {
  style: PropTypes.shape({
    position: PropTypes.string.isRequired,
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  name: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.shape({
    path: PropTypes.string,
    extension: PropTypes.string,
  }),
  urls: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    url: PropTypes.string,
  })),
};

ListItem.defaultProps = {
  style: undefined,
  name: '',
  description: '',
  thumbnail: {},
  urls: [],
};
