import styled from '@emotion/styled';

const Seperator = styled.hr`
  width: 220px;
  height: 0px;
  margin-top: 15px;
  border: 1px solid ${props => props.theme.color.actioncolor};
  font-family: 'Roboto';
  opacity: 0.3;
`;

export default Seperator;
