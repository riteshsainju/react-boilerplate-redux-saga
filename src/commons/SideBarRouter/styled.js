import styled from 'styled-components'
import Drawer from '@material-ui/core/Drawer';
import theme from 'constants/theme'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { NavLink } from 'react-router-dom';

export const MenuDrawer = styled(Drawer)`
.MuiDrawer-paper {
    background-color: ${theme.color.sidebar.primary};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    width: 210px;
    margin-top:70px;
    color:${theme.color.white};
}`, 
  Container = styled.div`
`,
  MenuLink = styled(NavLink)`
  color:${theme.color.white}
  text-decoration:none
  width: 100%;
  display:flex;
  padding:10px;
  &.active {
    background:${theme.color.white}
    color:${theme.color.primary}  
    svg{
      color:${theme.color.primary}  
    },
  },
   
    }
`,
  MenuListItem = styled(ListItem)`
    &&{color:${theme.color.white};
    padding:0px;
    :hover{
      &&{
      background:${theme.color.white}
      color:${theme.color.primary}
      svg, a{  
        color:${theme.color.primary}
      }
    }
  }
`,
  MenuListItemText = styled(ListItemText)`
`,
  MenuListItemIcon = styled(ListItemIcon)`
  && { min-width:24px;
  padding: 6px 8px 2px 2px;
  color:${theme.color.white}
  }
  `;
