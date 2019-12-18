import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const AppBar = styled.div`
  height: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Greeting = styled.h2`
  width: 66%;
  flex-wrap: wrap;
  font-family: Roboto;
  font-weight: normal;
  letter-spacing: 0.05em;
  text-align: left;
  color: ${props => props.theme.color.primary};
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F18%2FGlatt_-_Glattbrugg_IMG_6869.jpg%2F1200px-Glatt_-_Glattbrugg_IMG_6869.jpg&f=s1&nofb=1');
  border: 1px solid #707070;
  border-radius: 50%;
`;

export default function TopBar(props) {
  function shortName(name) {
    if (name.length > 17) {
      return name.substring(0, 15) + '...';
    } else {
      return name;
    }
  }

  return (
    <AppBar>
      <Greeting>Hello {shortName(props.merchantName)}</Greeting>
      <Avatar></Avatar>
    </AppBar>
  );
}

TopBar.propTypes = {
  merchantName: PropTypes.string.isRequired
};
