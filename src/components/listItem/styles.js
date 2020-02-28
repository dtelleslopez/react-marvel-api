import styled from 'styled-components';
import * as Colors from '../../styles/Colors';
import { Button } from '../button';

export const Wrapper = styled.div`
  box-sizing: content-box;
  flex-grow: 1;
  height: 460px;
  max-width: calc(33% - 36px);
  padding: 14px 18px;
  width: 100%;

  @media only screen and (max-width: 1200px) {
    max-width: calc(50% - 36px);
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 36px);
  }
`;

export const Card = styled.div`
  background-color: ${Colors.WHITE};
  border-radius: 5px;
  border: 2px solid ${Colors.GREY_4};
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const Thumbnail = styled.div`
  background-image: ${(props) => (props.path && `url(${props.path})`)};
  background-position: ${(props) => (props.path && props.path.includes('image_not_available') ? 'center bottom' : 'center')};
  background-repeat: no-repeat;
  background-size: cover;
  height: 230px;
`;

export const Content = styled.div`
  margin: 0 24px;
`;

export const Name = styled.h5`
  line-height: 135%;
  margin-bottom: 6px;
  margin-top: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Description = styled.p`
  -webkit-box-orient: vertical; 
  -webkit-line-clamp: 3;
  display: -webkit-box;
  font-style: ${(props) => (props.empty ? 'italic' : 'normal')};
  font-weight: ${(props) => (props.empty ? 'normal' : 500)};
  line-height: 135%;
  overflow: hidden;
`;

export const ReadMore = styled(Button)`
  bottom: 24px;
  position: absolute;
  right: 24px;
`;
