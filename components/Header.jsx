import Image from 'next/image';
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import { useEffect, useState } from 'react';
function Header() {
  const [name, setName] = useState(null)

  useEffect(() => {
    fetch('https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818')
      .then((res) => res.json())
      .then((data) => {
        setName(data.full_name)
      })
  }, [])
  return (
      <Container>
          <LogoContainer>
              <Image src="/Logo.png" width={90} height={90}/>
          </LogoContainer>
          <AvatarContainer>
            <Avatar src="/profilepic.jfif"/>
            <Name>{name}</Name>
          </AvatarContainer>
      </Container>
  )
}

export default Header;

const Container = styled.div`
width: 100vw;
display: flex;
justify-content: space-between;
position: -webkit-sticky; /* Safari */
position: sticky;
top: 0;
background-color: white;
z-index: 50;
`;

const LogoContainer = styled.div`
display: flex;
align-items: center;
cursor: pointer;
`;

const AvatarContainer = styled.div`
 display: flex;
 align-items: center;
 padding: 5px;
 margin-right: 118px;
 cursor: pointer;
 @media (max-width: 834px) {
  margin-right: 56px;
}
@media (max-width: 768px ) {
  margin-right: 35px;
}
`;

const Name = styled.span`
font-weight:500;
padding: 10px;
color: #263238;
@media (max-width: 768px ) {
 display: none;
}
`;


