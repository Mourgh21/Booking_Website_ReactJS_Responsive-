import React from 'react'
import styled from 'styled-components'
import TravelHero from '../../Images/TravelHero.png'
import IconProfileHero from '../../Images/IconProfileHero.png'
import IconHero from '../../Images/IconHero.png'
import CustomForm from '../Custom/CustomForm'
import { Mobile } from '../../Utils/Responsive'




const Container = styled.section`
    margin: 10rem 0;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 8rem;
    margin: 0 auto;
    justify-content: space-between;

    ${Mobile({
      padding: '4rem',
      flexDirection: 'column',

    })}
`;

const TextContainer = styled.div`
    max-width: 440px;
    padding-bottom: 5rem;
`;

const IntroText = styled.p`
    font-size: 1.3rem;
    font-family: bold;
    color: #777E90;
        ${Mobile({
      fontSize: '1.8rem',
    })}
`;

const Title = styled.h1`
   font-size: 5rem;
   margin: 1.5rem 0;

   
    ${Mobile({
      fontSize: '4.5rem',
    })}
`;

const Desc = styled.p`
    font-size: 1.5rem;
    color: #777E90;
    margin-bottom: 4rem;
    ${Mobile({
      fontSize: '1.8rem',
    })}
`;

const ImageContainer = styled.div`
    position: relative;
    
`;

const MainImage = styled.img`

    ${Mobile({
      maxWidth: '100%',
    })}
`;

const SeconImage = styled.div`
    position: absolute;
    bottom: 16.5%;
    left: 1.5%;
    width: 39.7%;
    

`;

const Image = styled.img`

`;

const ThirdImage = styled.div`
    position: absolute;
    right: 10%;
    bottom: 50.5%;

    ${Mobile({
      display: 'none',
    })}
`;







const HeroSectionTwo = () => {
  return (
    <Container>
        <Wrapper>
            <TextContainer>
                <IntroText>SUPERCHARGE YOUR PLANNING POWERS</IntroText>
                <Title>Travel To make memories all around the world</Title>
                <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Desc>
                <CustomForm/>

            </TextContainer>
            <ImageContainer>
                <MainImage src={TravelHero} />
                <SeconImage>
                    <Image src={IconProfileHero} />
                </SeconImage>
                <ThirdImage>
                    <Image src={IconHero} />
                </ThirdImage>
            </ImageContainer>
        </Wrapper>
    </Container>
  )
}

export default HeroSectionTwo