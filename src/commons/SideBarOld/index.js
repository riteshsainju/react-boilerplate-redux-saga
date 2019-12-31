import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import theme from 'constants/theme'

const Container = styled.div`
    background-color: ${theme.color.sidebar.primary};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    position: fixed;
    overflow: auto;
    width: 210px;
    margin-top:70px;
    padding-bottom: 55px;
  `,
  SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
  `,
  MenuItem = styled.div`
    padding: 10px 10px;
    color: ${theme.color.white};
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
  `,

  MenuLink = styled(NavLink)`
    color: ${theme.color.white};
    padding: 10px 10px;
    font-size: 14px;
    text-decoration:none;
    font-weight: 600;
    text-transform: uppercase;
    :hover{
      &&{
      background:${theme.color.white}
      color:${theme.color.primary}
    }
    }
  `,
  SubMenuLink = styled(NavLink)`
  color: ${theme.color.white};
  padding: 10px 8px;
  font-size: 14px;
  text-decoration:none;
  :hover{
    &&{background:${theme.color.white}
    color:${theme.color.primary}}
  }
`

export const RouteWithSidebar = styled.div`
  margin-left: 210px;
`

const Sidebar = ({ sideBarItems }) => {
  const offsetTop =0

  return (
    <>
      <Container style={{ height: `calc(100% - ${offsetTop}px)` }}>
        {sideBarItems.map(
          section =>
            !section.hide && (
              <SectionContainer key={section.name}>
                {section.link && <MenuLink
                  to={section.link}
                  style={section.style}
                  activeClassName={!section.isRedirect && 'route-active'}
                  key={section.name}
                >
                  {section.name}
                </MenuLink>
                    
                }
                {section.items && <MenuItem> {section.name}</MenuItem>}
                {section.items && section.items.map(
                  item => {
                    return(
                      <SubMenuLink
                        to={item.link}
                        style={item.style}
                        activeClassName={!item.isRedirect && 'route-active'}
                        key={item.name}
                      >
                        {item.name}
                      </SubMenuLink>
                    )
                  }
                )}
              </SectionContainer>
            ),
        )}
      </Container>
    </>
  )
}

export default Sidebar
