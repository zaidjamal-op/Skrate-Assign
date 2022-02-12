import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

function Overview() {
const [jobAppliedData, setJobAppliedData] = useState(null);
const [mentorshipwData, setMentorshipData] = useState(null);
const [profileviewData, setProfileviewData] = useState(null);
const [skillsData, setSkillsData] = useState(null);

    useEffect(() => {
        fetch('https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818')
          .then((res) => res.json())
          .then((data) => {
            setSkillsData(data.dashboard_stats.skills_verified)
            setProfileviewData(data.dashboard_stats.profile_views)
            setMentorshipData(data.dashboard_stats.mentorship_sessions)
            setJobAppliedData(data.dashboard_stats.jobs_applied)
          })
      }, [])

      const ButtonAlert = () => {
          alert('A Button was Clicked')
      }
  return (
    <Container>
     <OverviewHeader>
        <Title>Overview</Title>
        <Dashboard onClick={() => ButtonAlert()}>Dashboard</Dashboard>
     </OverviewHeader>

     <Row>
         <Cards>
             <CardTitle>Profile Views</CardTitle>
             <CardNumber>{profileviewData}</CardNumber>
         </Cards>
         <Cards>
             <CardTitle>Mentorship<br/>Sessions</CardTitle>
             <CardNumber>{mentorshipwData}</CardNumber>
         </Cards>
     </Row>

     <Row>
         <Cards>
             <CardTitle>Jobs Applied</CardTitle>
             <CardNumber>{jobAppliedData}</CardNumber>
         </Cards>
         <Cards>
             <CardTitle>Skills Verified</CardTitle>
             <CardNumber>{skillsData}</CardNumber>
         </Cards>
     </Row>
    </Container>
  )
}

export default Overview;

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
height: 285px;
}
`;

const OverviewHeader = styled.div`
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

const Dashboard = styled.div`
 display: flex;
 background: #F6F7FF;
 border-radius: 5px;
 width: 165px;
 height: 50px;
 align-items: center;
 justify-content: center;
 font-weight: 500;
font-size: 16px;
line-height: 36px;
margin-right: 15px;
cursor: pointer;
`;

const Row = styled.div`
display: flex;
flex: 1;
justify-content: space-around;
padding: 10px;
font-weight: 600;
margin-bottom: 10px;

@media only screen and (min-width:321px) and (max-width:768px) {
    display: grid;
    grid-template-rows: auto auto auto auto;
    grid-gap: 10px;
    padding: 0px;
    margin-bottom: 0px;
    }  
`;

const Cards = styled.div`
display: flex;
width: 260px;
height: 80px;
background: #F6F7FF;
border-radius: 5px;
align-items: center;
justify-content: space-around;

@media only screen and (min-width:321px) and (max-width:768px) {
    display: flex;
    width: 300px;
    height: 80px;
    padding : 10px
    
    }  
`;

const CardTitle = styled.div`
 display: flex;
`;

const CardNumber = styled.div`
display: flex;
color: #4F65F6;
font-style: normal;
font-weight: 500;
font-size: 45px;
line-height: 72px;
`;