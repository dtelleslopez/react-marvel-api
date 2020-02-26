import styled from 'styled-components';
import * as Colors from '../../styles/Colors';

export const Wrapper = styled.div`
  flex-grow: 1;
  height: 460px;
  max-width: 33%;
  padding: 16px;
  width: 100%;
`;

export const Card = styled.div`
  background-color: ${Colors.WHITE};
  border-radius: 5px;
  border: 2px solid ${Colors.GREY_4};
  height: 100%;
`;

export const Preview = styled.div`
  height: 230px;
`;

export const Content = styled.div`
  margin: 0 24px;
`;

export const Name = styled.h5`
  margin-bottom: 12px;
`;

export const Description = styled.p`
  -webkit-box-orient: vertical; 
  -webkit-line-clamp: 3;
  display: -webkit-box;
  font-style: ${(props) => (props.empty ? 'italic' : 'normal')};
  font-weight: ${(props) => (props.empty ? 'normal' : 500)};
  overflow: hidden;
`;
