import React ,{ useState }from 'react';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { MenuDrawer, Container, MenuListItem,MenuListItemText, MenuLink, MenuListItemIcon } from './styled'

const MenuBar = ({ sideBarItems, ...props }) => {
  const [state, setState] = useState({});

  // this method sets the current state of a menu item i.e whether it is in expanded or collapsed or a collapsed state
  const handleClick= item => {
    setState(prevState => ({ [item]: !prevState[item] }))
  }

  // if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
  const handler = children => {
    return children.map(subOption => {
      if (!subOption.children) {
        return (
          <div key={subOption.name} >
            <MenuListItem button key={subOption.name} style={subOption.style}>
              <MenuLink
                to={subOption.url} 
                activeClassName="active"

              >
                {!!subOption.icon && (
                  <MenuListItemIcon >
                    {/* <subOption.icon /> */}
                    <FontAwesomeIcon icon={subOption.icon} />
                  </MenuListItemIcon>
                )}
                <MenuListItemText primary={subOption.name} />
              </MenuLink>
            </MenuListItem>
          </div>
        );
      }
      return (
        <div key={subOption.name} >
          <MenuListItem button onClick={() => handleClick(subOption.name)} style={{ padding: '10px' }}>
            {!!subOption.icon && (
              <MenuListItemIcon >
                {/* <subOption.icon /> */}
                <FontAwesomeIcon icon={subOption.icon} />
              </MenuListItemIcon>
            )}
            <MenuListItemText primary={subOption.name} />
            {state[subOption.name] ? <ExpandLess /> : <ExpandMore />}
          </MenuListItem>
          <Collapse in={state[subOption.name]} timeout="auto" unmountOnExit>
            {handler(subOption.children)}
          </Collapse>
        </div>
      );
    });
  }

  return (
    <MenuDrawer
      variant="persistent"
      anchor="left"
      open
    >
      <Container>
        <List>
          {/* <MenuListItem key="menuHeading" divider disableGutters>
              <MenuListItemText

                // className={props.classes.menuHeader}
                inset
                primary="Nested Menu"
              />
            </MenuListItem> */}
          {handler(sideBarItems)}
        </List>
      </Container>
    </MenuDrawer>
  );
}

export default MenuBar;
