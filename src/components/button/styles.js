import styled from 'styled-components';
import * as Colors from '../../styles/Colors';

export const CustomButton = styled.a`
  background-color: ${Colors.GREY_1};
  border-radius: 5px;
  border: 2px solid ${Colors.GREY_1};
  color: ${Colors.WHITE};
  cursor: pointer;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: 135%;
  padding: 12px 22px;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    background-color: ${Colors.WHITE};
    color: ${Colors.GREY_1};
    outline: none;

    svg {
      path {
        fill: ${Colors.GREY_1};
      }
    }
  }

  svg {
    margin-left: 14px;
    position: relative;
    top: 3px;

    path {
      fill: ${Colors.WHITE};
    }
  }
`;
