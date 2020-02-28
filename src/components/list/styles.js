import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 52px 44px;
  position: relative;

  @media only screen and (max-width: 768px) {
    margin: 52px 2px;
  }
`;

export const Paragraph = styled.p`
  margin: 12px 18px;
`;
