import React, { useState } from 'react'
import styled from 'styled-components'
import { navItems } from '../assets/navItems'


function Sidebar() {
    const [active, setActive] = useState(navItems[0].title);
  return (
    <Container>
          {navItems.map((item, index) => (
            <SidebarLink key={index} onClick={() =>setActive(item.title)}>
              <LeftBorder style={{ backgroundColor: item.title === active && '#4F65F6'}}><span>.</span></LeftBorder>
              <TopBorder style={{ backgroundColor: item.title === active && '#4F65F6'}} ><span>.......</span></TopBorder>
                <Icon>{item.icon}</Icon>
                <Title>{item.title}</Title>
                <BottomBorder style={{ backgroundColor: item.title === active && '#4F65F6'}}><span>.......</span></BottomBorder>
            </SidebarLink>
            ))}
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
position: fixed;
height: 100%;
width: 20%;
padding-top: 0.5rem;
padding-bottom: 0.5rem;

  @media (max-width: 768px ) {
    display: none;
    
}  

@media only screen and (min-width: 769px) and (max-width: 1281px) {
    width: 100vw;
    display: grid;
    height: 10%;
    grid-template-columns: auto auto auto auto;
    padding: 10px;
    background-color: white;
    z-index: 50;
    
}

`;

const SidebarLink = styled.div`
display: flex;
align-items: center;
color: #3A3A3A;
margin-top: 0.875rem;
cursor: pointer;
font-size: 1.2rem;
line-height: 1.5rem;

@media only screen and (min-width: 769px) and (max-width: 1281px) {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-right: 4rem;
  font-size: 16px
}  

`;

const Icon = styled.div`
display: flex;
align-items: center;
margin-left: 1rem;

  @media only screen and (min-width: 769px) and (max-width: 1281px) {
    display: none;
  }
`;

const Title = styled.div`
display: flex;
align-items: center;
margin-left: 1rem;
`;

const BottomBorder = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin-left: 15px;
width:30px;
height:8px;
border-top-right-radius: 5px;
border-top-left-radius: 5px;
margin-top: 3px;

> span {
  opacity: 0;
}

@media only screen and (min-width: 1282px) and (max-width: 2000px) {
  display: none;
}

`;

const TopBorder = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin-left: 10px;
width:30px;
height:5px;
margin-bottom: 5px;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;

> span {
  opacity: 0;
}

@media only screen and (min-width: 769px) and (max-width: 1281px) {
  display: none;
}

@media only screen and (min-width: 1282px) and (max-width: 2000px) {
  display: none;
}

`;

const LeftBorder = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin-left: 10px;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
width:5px;

> span {
  opacity: 0;
}

@media only screen and (min-width: 769px) and (max-width: 1281px) {
  display: none;
}

`;