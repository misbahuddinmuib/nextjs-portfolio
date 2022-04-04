import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <DiCssdeck size="3rem" /> <span>Tanvir Ahmed</span>
        </a>
      </Link>
    </Div1>
    <Div2>
    <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#achievements">
          <NavLink>Achievements</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#features">
          <NavLink>Features</NavLink>
        </Link>
      </li>
     
     
     
    </Div2>
    <Div3>
      <SocialIcons href="https://www.linkedin.com/in/tanvir-ahmed-3b8a811a4/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>


    </Div3>
  </Container>
);

export default Header;
