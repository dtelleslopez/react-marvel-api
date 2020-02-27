import styled from 'styled-components';
import * as Colors from '../../styles/Colors';
import { rotate } from '../../styles/Animations';

export const Wrapper = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const Background = styled.div`
  background-color: ${Colors.BACKGROUND};
  height: 100%;
  opacity: 0.75;
  width: 100%;
`;

export const Container = styled.div`
  align-items: center;
  background-color: ${Colors.WHITE};
  border-radius: 3px;
  display: flex;
  height: 100px;
  justify-content: center;
  left: calc(50% - 50px);
  position: absolute;
  top: 58px;
  width: 100px;
  z-index: 1;
`;

export const Ring = styled.div`
  display: inline-block;
  height: 50px;
  position: relative;
  width: 50px;

  & > div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & > div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & > div:nth-child(3) {
    animation-delay: -0.15s;
  }

  & > div {
    ${rotate()}
    border-radius: 50%;
    border: 8px solid ${Colors.GREY_1};
    border-color: ${Colors.GREY_1} transparent transparent transparent;
    box-sizing: border-box;
    display: block;
    height: 50px;
    position: absolute;
    width: 50px;
  }
`;

export const Line = styled.div``;
