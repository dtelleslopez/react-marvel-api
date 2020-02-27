import React from 'react';

import {
  Wrapper, Background, Container, Ring, Line,
} from './styles';

export const Loading = () => (
  <Wrapper>
    <Background />
    <Container>
      <Ring>
        <Line />
        <Line />
        <Line />
        <Line />
      </Ring>
    </Container>
  </Wrapper>
);
