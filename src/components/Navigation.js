import React, {useState} from 'react';
import { Link } from 'gatsby';

import { NavigationWrapper,  NavigationList, NavigationListItem,  Logo } from './styles/NavigationStyles';

import { HamburgerBox, StyledHamburger, HamburgerInner  } from './styles/HamburgerStyles';

const Navigation = () => {
  const[menu, showMenu] = useState(false)

  return (
    <>
    <StyledHamburger hamburger={menu} onClick={()=>showMenu(!menu)}>
        <HamburgerBox>
          <HamburgerInner hamburger={menu} />
        </HamburgerBox>
    </StyledHamburger>
    <Logo>
        <Link to="/">HAGTA</Link> 
    </Logo>
    <NavigationWrapper showNav={menu}>
      <NavigationList>
          <NavigationListItem>
            <Link to="/articles">articles</Link>
          </NavigationListItem>
          <NavigationListItem>
            <Link to="/about">about</Link>
          </NavigationListItem>
          <NavigationListItem>
          <Link to="/gallery">gallery</Link>
          </NavigationListItem>
          <NavigationListItem>
            <Link to="/contact">contact</Link>
          </NavigationListItem>
      </NavigationList>
    </NavigationWrapper>
    </>
  )
};

export default Navigation;