import React from 'react'
import CustomHeader from '../Custom/CustomHeader'
import styled from 'styled-components'
import { Mobile } from '../../Utils/Responsive';
import BookingIcon from '../../Images/BookingIcon.png'
import ChekingIcon from '../../Images/ChekingIcon.png'
import DollarIcon from '../../Images/DollarIcon.png'



const Container = styled.section`
    padding: 9rem 8rem;

        ${Mobile({
      padding: '0rem 3rem',
    })}
   
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;

    ${Mobile({
      flexDirection: 'column',
    })}
`;


const WorkItems = styled.div`
    text-align: center;
    margin-right: 7rem;
    flex: 1;

    ${Mobile({
      marginLeft: '5rem',
      marginBottom: '5rem',
    })}
`;



const Image = styled.img``;



const Worktitle = styled.h3`
    font-size: 2.4rem;
    font-weight: bold;
    padding-bottom: 1.5rem;
`;



const WorkDesc = styled.p`
    font-size: 2rem;
    color: #777e90;
`;

const WorkSection = () => {
  return (
    <Container>
        <CustomHeader
        title="How it Works"
        description="Keep calm & travel on"
        />
        <Wrapper>
            <WorkItems>
                <Image src={BookingIcon} />
                <Worktitle>Book & Relax</Worktitle>
                <WorkDesc>Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. </WorkDesc>
            </WorkItems>
             <WorkItems>
                <Image src={ChekingIcon} />
                <Worktitle>Smart Checklist</Worktitle>
                <WorkDesc>Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. </WorkDesc>
            </WorkItems>
             <WorkItems>
                <Image src={DollarIcon} />
                <Worktitle>Save More</Worktitle>
                <WorkDesc>Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. </WorkDesc>
            </WorkItems>
        </Wrapper>
    </Container>
  )
}

export default WorkSection