import styled from 'styled-components';
import * as Colors from '../../styles/Colors';

export const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 540px;
`;

export const Input = styled.input`
  background: ${Colors.WHITE};
  border-width: 2px 0 2px 2px;
  border-style: solid;
  border-color: ${Colors.GREY_4};
  border-radius: 5px 0 0 5px;
  box-sizing: border-box;
  color: ${Colors.GREY_1};
  font-size: 18px;
  font-weight: 500;
  height: 56px;
  line-height: 135%;
  padding: 16px;
  width: 100%;

  ::placeholder {
    color: ${Colors.GREY_2};
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background: ${Colors.MARVEL};
  border-radius: 0px 5px 5px 0px;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  height: 56px;
  line-height: 56px;
  min-width: 56px;
  text-align: center;

  :active {
    border-style: solid;
  }

  :focus {
    outline: none;
  }
`;
