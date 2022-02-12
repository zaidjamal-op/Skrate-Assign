import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import {FaLongArrowAltRight} from 'react-icons/fa'

function UpcomingSession() {
    const [upcomingSessions, setUpComingSessions] = useState(null)

    useEffect(() => {
        fetch('https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818')
          .then((res) => res.json())
          .then((data) => {
           setUpComingSessions(data.upcoming_sessions)
          })
      }, [])

      const ButtonAlert = () => {
        alert('A Button was Clicked')
    }

  return (
    <Container>
        <UpcommingHeader>
           <Title>Upcoming Sessions</Title>
           <ViewAll onClick={() => ButtonAlert()}>View All</ViewAll>
        </UpcommingHeader>
        {upcomingSessions?.map((upcomingsession, index) => (
            <Row key={index}>
            
            <NameContainer>
            <AvatarContainer>
                <Avatar src="/Rushil.jfif"/>
            </AvatarContainer>
                <Name>
                    <h4>{upcomingsession.mentor_name}</h4>
                    <span>Flutter</span>
                    <SmallMentorship style={{backgroundColor: upcomingsession.session_type === 'Review' && '#91AEE1'}} onClick={() => ButtonAlert()}>{upcomingsession.session_type}</SmallMentorship>
                </Name>
            </NameContainer>
            <DateContainer>
                <Date>
                <h4>{upcomingsession.timings}</h4>
                <span>{upcomingsession.date}</span>
                <SmallArrow onClick={() => ButtonAlert()}>
                <FaLongArrowAltRight/>
                </SmallArrow>
                </Date>
            </DateContainer>
            <Mentorship style={{backgroundColor: upcomingsession.session_type === 'Review' && '#91AEE1'}} onClick={() => ButtonAlert()}>{upcomingsession.session_type}</Mentorship>
            <Arrow onClick={() => ButtonAlert()}>
                <FaLongArrowAltRight/>
            </Arrow>
        </Row>
        ))}
    </Container>
  )
}

export default UpcomingSession;

const Container = styled.div`
display: flex;
flex-direction: column;
width: 611px;
height: 285px;
background: #FFFFFF;
border: 1px solid whitesmoke;
box-sizing: border-box;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
border-radius: 10px;

@media only screen and (min-width:321px) and (max-width:768px) {
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 585px;
    }
@media only screen and (min-width: 769px) and (max-width: 1281px) {
display: flex;
flex-direction: column;
width: 740px;
height: 485px;
    }
`;

const UpcommingHeader = styled.div`
display: flex;
flex: 1;
justify-content: space-between;
padding: 10px;
font-weight: 600;

`;

const Title = styled.div`
 display: flex;
 margin-top: 5px;
 font-weight: 500;
 font-size: 25px;
 line-height: 48px;
 margin-left: 15px;
`;

const ViewAll = styled.div`
 display: flex;
 background: #F6F7FF;
 border-radius: 5px;
 width: 145px;
 height: 50px;
 align-items: center;
 justify-content: center;
 font-weight: 500;
font-size: 16px;
line-height: 36px;
margin-right: 20px;
cursor: pointer;
`;

const Row = styled.div`
display: flex;
flex: 1;
justify-content: space-around;

`;

const AvatarContainer = styled.div`
display: flex;
justify-content: center;
@media only screen and (min-width:321px) and (max-width:768px) {
    display: none;
}  
`;

const NameContainer = styled.div`
 display: flex;
 flex: 0.3;
 @media only screen and (min-width:321px) and (max-width:768px) {
    padding: 10px;
    flex: 0.5;
}
`;

const Name = styled.div`
 display: flex;
 flex-direction: column;
margin-left: 10px;
 > h4 {
     font-size: 16px;
     font-weight: 600;
 }
 
`;

const DateContainer = styled.div`
display: flex;
flex: 0.3;

`;

const Date = styled.div`
display: flex;
flex-direction: column;
text-align: center;
@media only screen and (min-width:321px) and (max-width:768px) {
    text-align: end;
}
`;

const Mentorship = styled.div`
display: flex;
width: 90px;
height: 40px;
background: #E8C9D1;
border-radius: 5px;
font-weight: 500;
font-size: 12px;
align-items: center;
justify-content: center;
cursor: pointer;
flex: 0.2;
@media only screen and (min-width:321px) and (max-width:768px) {
    display: none;
}
`;

const Arrow = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 90px;
height: 40px;
font-size: 24px;
cursor: pointer;
@media only screen and (min-width:321px) and (max-width:768px) {
    display: none;
}
`;

const SmallMentorship = styled.div`
display: flex;
width: 90px;
height: 40px;
background: #E8C9D1;
border-radius: 5px;
font-weight: 500;
font-size: 12px;
align-items: center;
justify-content: center;
margin-top: 10px;
cursor: pointer;
@media only screen and (min-width: 1282px) and (max-width: 2000px) {
    display: none;
  }

  @media only screen and (min-width: 769px) and (max-width: 1281px) {
display: none;
}  
`;

const SmallArrow = styled.div`
display: flex;
align-items: center;
justify-content: end;
width: 90px;
height: 40px;
font-size: 24px;
cursor: pointer;
@media only screen and (min-width: 1282px) and (max-width: 2000px) {
    display: none;
  }
  @media only screen and (min-width: 769px) and (max-width: 1281px) {
display: none;
}    
`;