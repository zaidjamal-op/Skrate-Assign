import React from 'react'
import styled from 'styled-components';
import NewJobs from './NewJobs.jsx';
import Overview from './Overview.jsx';
import UpcomingSession from './UpcomingSession.jsx';

function MainContent() {
  return (
    <Container>
        <SubContainer>
            <CenterContainer>
            <SectionOne>
                <Overview/>
                <UpcomingSession/>
            </SectionOne>
            <MediaSectionTwo>
              <NewJobs/>
            </MediaSectionTwo>
            </CenterContainer>
            <SectionTwo>
              <NewJobs/>
            </SectionTwo>
        </SubContainer>
    </Container>
  )
}

export default MainContent;

const Container = styled.div`
width: 80%;
margin: 1rem 9rem 1rem 15rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 1rem;
  }
  
  @media only screen and (min-width: 769px) and (max-width: 1281px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 7rem 0 0 1rem;
    height: 100%;
    
}
`;

const SubContainer = styled.div`
margin: 0.5rem 0;
height: 80%;
width: 100%;
display: flex;
gap: 2rem;
padding-bottom: 0.5rem;
padding-top: 0.5rem;
@media (max-width: 768px) {
    height: 100%;
  }  

`;

const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 80%;
  gap: 2rem;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;

const SectionTwo = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80%;
  gap: 2rem;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 769px) and (max-width: 1281px) {
    display: none;
}
`;

const CenterContainer = styled.div`
display: flex;
width: 100%;
height: 100%;

@media only screen and (min-width: 769px) and (max-width: 1281px) {
    display: grid;
    justify-content: center;
    width: 100%;
    height: 100%;

}

@media (max-width: 768px) {
  display: grid;
    justify-content: center;
    
  }
`;

const MediaSectionTwo = styled.div`
display: flex;
  justify-content: space-between;
  height: 80%;
  gap: 2rem;
  width: 100%;
  @media only screen and (min-width: 1282px) and (max-width: 2000px) {
  display: none;
}

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
    padding-bottom: 4rem;
    padding-top: 2rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 1281px) {
    margin-top: -8rem;
}
`;