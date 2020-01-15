import styled from '@emotion/styled';

const MenuButton = styled.button`
  width: 186px;
  height: 30px;
  margin: 20px;
  border-radius: 15px;
  background: ${props => props.theme.color.secondary};
  border: 1px solid #ed462e;
  outline: none;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

export default MenuButton;
