import styled from 'styled-components';

import theme from 'constants/theme';
import card from '@material-ui/core/Card';
import cardContent from '@material-ui/core/CardContent';

const getColor = type => {
  switch(type) {
  case 'patients':
    return '#469097'
  case 'doctors':
    return '#4a487a'
  case 'employees':
    return '#2e57a7'
  case 'beds':
    return '#49606c'
  default:
    return `${theme.color.primary}`
  } 
}

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled(card)`
  && {height: 100px;
  width: 25%;
  margin:5px;
  }
`;

export const CardContent = styled(cardContent)`
 &&{ 
  display:flex;
  padding: 20px;
 }
`;

export const CardWrapper= styled.div`
  display: flex;
  padding: 0 0 20px 5px`

export const CardIcon = styled.div`
  font-size: 34px;
  width: 40px;
  padding: 10px;
  background: ${props => getColor(props.type)}
  color: white;
  `;
  
export const CardCount = styled.div`
  font-size: 24px;
  font-weight: 600;
  padding: 2px 20px;
`;

export const CardSubText = styled.div`
  font-size: 12px;
  padding: 0 20px;
`;

export const CardTextContent = styled.div`
`;

export const ChartBox = styled.div`
 height: 300px;
 width: 500px;
 padding: 30px 40px;
 margin: 0 10px;
 box-shadow: 0 0px 0px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`;


export const ChartWrapper = styled.div`
 display:flex;
`;

