import { Search } from 'components'
import React from 'react'
import Media from 'react-media'
import { useLocation } from 'react-router-dom'
import { screenSizeWidth } from 'utils'
import { CurrencySymbol, DisplayMenu, Hr, InputContainer, MobileMenu, MobileMenuIcon, MobileMenuItem, MobileMenuLink, Nav, NavbarWrap, NavLeft, NavLeftLi, NavLeftUl, NavRight, Select, SelectArrow, SelectContainer, SelectWrap, StyledLink, Theme, ThemeWrap } from './NavBar.css'

const NavBar = () => {
    const { pathname } = useLocation()
  return (
    <NavbarWrap>
      <Nav>
        <Media
          queries={{
            desktopSM: screenSizeWidth.desktopSM,
            desktopM: screenSizeWidth.desktopM,
            tablet: screenSizeWidth.tablet,
            tabletS: screenSizeWidth.tabletS,
          }}
        >
          {(matches) => (
            <>
              {matches.tablet && (
                <NavLeft>
                <NavLeftUl>
                  <NavLeftLi currentLocation={pathname === "/"}>
                    <StyledLink to="/">Coins</StyledLink>
                  </NavLeftLi>
                  <NavLeftLi currentLocation={pathname === "/portfolio"}>
                    <StyledLink to="/portfolio">Portfolio</StyledLink>
                  </NavLeftLi>
                </NavLeftUl>
              </NavLeft>
              )}
              <NavRight>
                <InputContainer>
                  <Search />
                </InputContainer>
                <SelectContainer>
                  {matches.desktopSM && (
                    <CurrencySymbol>$</CurrencySymbol>
                  )}
                  <SelectWrap>
                    <Select>
                      <option>USD</option>
                    </Select>
                    <SelectArrow size="0.7rem" />
                  </SelectWrap>
                </SelectContainer>
                {matches.tablet && (
                    <ThemeWrap>
                    <Theme size="1.8rem" />
                  </ThemeWrap>
                )}
              </NavRight>
              {matches.tabletS && (
                <MobileMenu>
                <MobileMenuIcon size='1.8rem'></MobileMenuIcon>
                <DisplayMenu>
                    <MobileMenuItem>
                        <MobileMenuLink to='/' >Coins</MobileMenuLink>
                    </MobileMenuItem>
                    <MobileMenuItem>
                        <MobileMenuLink to='/portfolio'>Portfolio</MobileMenuLink>
                    </MobileMenuItem>
                    <Hr />
                    <MobileMenuItem>
                        Theme
                    </MobileMenuItem>
                </DisplayMenu>
              </MobileMenu>
              )}
            </>
          )}
        </Media>
      </Nav>
    </NavbarWrap>
  );
}

export default NavBar