import React, {useState} from 'react'
import styled from 'styled-components';
import { navItems } from '../assets/navItems'

function SmallSidebar() {
  const [active, setActive] = useState(navItems[0].title);
  return (
    <Container>
      <SubContainer>
          {navItems.map((item, index) => (
            <Wrapper key={index} onClick={() => setActive(item.title) }>
              <Border>
              <TopBorder style={{ backgroundColor: item.title === active && '#4F65F6'}} ><span>.......</span></TopBorder>
              </Border>
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
            </Wrapper>
          ))}
      </SubContainer>
    </Container>
  )
}

export default SmallSidebar;

const Container = styled.div`
  display: grid;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-bottom: 0.5rem;
  background-color: white;
  border-top: 2px solid whitesmoke;
  color: #323232;

@media only screen and (min-width: 769px) and (max-width: 1281px) {
  display: none;
}

@media only screen and (min-width: 1282px) and (max-width: 2000px) {
  display: none;
}

`  ;

const SubContainer = styled.div`
 display: grid;
 grid-template-columns: auto auto auto auto;
 align-content: space-evenly;
 grid-gap: 10px;
 cursor: pointer;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-content: center;
`;


const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
`;

const Title = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
`;

const TopBorder = styled.div`
display: flex;
width:30px;
height:5px;
margin-bottom: 5px;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;

> span {
  opacity: 0;
}
`;

const Border = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;