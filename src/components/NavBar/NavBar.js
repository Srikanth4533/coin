import Search from 'components/Search'
import React from 'react'
import Media from 'react-media'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { changeCurrency } from 'store/config/actions'
import { currencyList, keyGen, screenSizeWidth } from 'utils'
import { CurrencySymbol, DisplayMenu, Hr, InputContainer, MobileMenu, MobileMenuIcon, MobileMenuItem, MobileMenuLink, Nav, NavbarWrap, NavLeft, NavLeftLi, NavLeftUl, NavRight, Select, SelectArrow, SelectContainer, SelectWrap, StyledLink, Theme, ThemeWrap } from './NavBar.css'

const NavBar = () => {
    const { pathname } = useLocation()
    const { currency, currencySymbol } = useSelector(state => state.config)
    const dispatch = useDispatch()

    const handleChangeCurrency = (e) => {
      dispatch(changeCurrency(e.target.value))
    }
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
                    <CurrencySymbol>{currencySymbol}</CurrencySymbol>
                  )}
                  <SelectWrap>
                    <Select
                      value={currency}
                      onChange={handleChangeCurrency}
                    >
                    {Object.keys(currencyList).map((currencyType) => (
                      <option key={keyGen()} value={currencyType}>{currencyList[currencyType].name}</option>
                    ))}
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