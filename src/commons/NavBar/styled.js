import styled from 'styled-components';
import { Link } from 'react-router-dom'
import LogoIcon from 'assets/icons/logo.svg';
import SearchIcon from '@material-ui/icons/Search';

// import theme from 'constants/theme';
export const Logo = styled.div`
  background: url(${LogoIcon}) no-repeat 1px 0px;
  height: 40px;
  width: 110px;
`;

function styleMenuPosition(props) {
  if (props.right) {
    return 'flex-end'
  }
  if (props.left) {
    return 'flex-start'
  }
  if (props.center) {
    return 'center'
  }
  return 'center'
}

// export const HeaderWrapper = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     z-index: 100;
//     background-color: ${theme.color.white};
//   `,
export const Header = styled.div`
    padding: 4px;
    display: flex;
    max-width: 1280px;
    width: 100%;
    margin: auto;
  `,
  ProfileDropdown = styled.div`
    cursor: pointer;
  `,
  Avatar = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: cover;
  `,
  Menu = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: ${props => {
    return styleMenuPosition(props)
  }};
  `,
  MenuItem = styled(Link)`
    color: 'black';
    padding: 10px;
    text-decoration: none;
    font-size: 1em;
  `,
  SearchBar = styled.div`
    border: 1px solid lightgray;
    border-radius: 8px;
    width: 300px;
    padding: 5px 10px;
  `,
  SearchBarIcon = styled(SearchIcon)`
  color:gray;
`;
