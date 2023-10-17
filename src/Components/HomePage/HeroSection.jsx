import React from 'react'
import hero_image from '../../Images/hero_image.jpg'
import styled from 'styled-components';
import { Mobile } from '../../Utils/Responsive';


const Container = styled.section`
    margin: 0 4.75rem;
    position: relative;

   ${Mobile({
      margin: '0 2rem',
    })}
`;


const ImageContainer = styled.div``;

const Image = styled.img`
    border-radius: 20px;
    width:100%;
`;

const InfoContainer = styled.div`
    position: absolute;
    top: 0;
    padding: 20rem 10rem;
    width: 50%;

    ${Mobile({
      padding: '3.6rem 2rem',
    })}
    
`;

const Heading = styled.h1`
    font-size: 9rem;
    margin: 0;

    ${Mobile({
      fontSize: '3rem',
    })}
`;


const Desc = styled.p`
    font-size: 2rem;
    margin: 2rem 0;

    ${Mobile({
      fontSize: '1.5rem',
      margin: '1rem 0',
    })}
`;

const Button = styled.button`
    background-color: #8585c7;
    border-radius: 2.5rem;
    color: white;
    font-size: 1.75rem;
    font-weight: bold;
    padding: 1.5rem 2.5rem;
    border: none;
    cursor: pointer;

    &:hover{
      background-color: blue;
    }


    ${Mobile({
      fontSize: '1rem',
      padding: '1rem 2rem',
      borderRadius: '1.5rem',
    })}
`;



const HeroSection = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={hero_image} alt='' />
      </ImageContainer>
      <InfoContainer>
        <Heading>
          Air, Sleep, Dream
        </Heading>
        <Desc>
          Find and book a great experience
        </Desc>
        <Button>Start your search</Button>
      </InfoContainer>
    </Container>
    
    
  )
}

export default HeroSection