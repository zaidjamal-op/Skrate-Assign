import React, { useEffect, useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';
import styled from 'styled-components';

function NewJobs() {
    const [jobpostings, setJobPostings] = useState(null)

    useEffect(() => {
        fetch('https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818')
          .then((res) => res.json())
          .then((data) => {
           setJobPostings(data.job_postings)
          })
      }, [])
    

    const ButtonAlert = () => {
        alert('A Button was Clicked')
    }

  return (
    <Container>
        <NewJobsHeader>
            <Title>New Jobs</Title>
            <ViewAll onClick={() => ButtonAlert()}>View All</ViewAll>
        </NewJobsHeader>
        {jobpostings?.map((jobposting, index) => (
            <Row key={index}>
            <NameContainer>
            <AvatarContainer>
                    <Avt src="/jobs.png"/>
            </AvatarContainer>
                    <Name>
                        <h4>{jobposting.role}</h4>
                        <span>{jobposting.organization_name}</span>
                        <span>{jobposting.location}</span>
                    </Name>
                </NameContainer>
                <DayContainer>
                    <Day>
                    <span>{jobposting.date_posted}</span>
                    <SmallArrow onClick={() => ButtonAlert()}>
                    <FaLongArrowAltRight/>
                    </SmallArrow>
                    </Day>
                </DayContainer>
                <Arrow onClick={() => ButtonAlert()}>
                    <FaLongArrowAltRight/>
                </Arrow>
            </Row>
        ))}
        
    </Container>
  )
}

export default NewJobs;

const Container = styled.div`
display: flex;
flex-direction: column;
width: 611px;
height: 600px;
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
height: 585px;
    }
`;

const NewJobsHeader = styled.div`
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
justify-content: space-evenly;

@media (max-width: 768px) {
    justify-content: space-around;
  }
`;

const AvatarContainer = styled.div`
display: flex;
justify-content: center;
@media (max-width: 768px) {
    display: none;
  }
`;

const NameContainer = styled.div`
 display: flex;
flex: 0.6;

`;

const Name = styled.div`
 display: flex;
 flex-direction: column;
 margin-left: 20px;
 > h4 {
     font-size: 16px;
     font-weight: 600;
 }
 
`;

const DayContainer = styled.div`
display: flex;
flex: 0.2;

`;

const Day = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
width: 90px;
height: 40px;
`;

const Arrow = styled.div`
display: flex;
font-size: 24px;
cursor: pointer;

@media (max-width: 768px) {
    display: none;
  }

`;

const Avt = styled.img`
  vertical-align: middle;
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;

const SmallArrow = styled.div`
display: flex;
justify-content: end;
color: black;
font-size: 24px;
cursor: pointer;
@media only screen and (min-width: 1282px) and (max-width: 2000px) {
    display: none;
  }
  @media only screen and (min-width: 769px) and (max-width: 1281px) {
display: none;
}    
`;