import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';

 
const SliderContent = styled.div`
    margin: 0 30px;
`;

const ImageContainer = styled.div`
    overflow: hidden;
    border-radius: 30px;
    max-width: 100%;
    height: auto;
`;


const Image = styled.img`
    max-width: 100%;
    border-radius: 30px;
    height: auto;
    transition: transform 0.6s;

    &:hover{
        transform: scale(1.1);
    }
`;


const SliderTextConainer = styled.div``;

const SliderTitle = styled.p`
    font-size: 2rem;
    margin: 2rem 0;
    color: black;

    &:hover{
        color: blue;   
    }

`;

const SliderDesc = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: #777e90;
    display: flex;
    align-items: center;

`;



const CustomCategoryCom = ({data}) => {
    const {image, texttitle, desctext} = data;
  return (
    <SliderContent>
        <ImageContainer>
            <Image src={image} />
        </ImageContainer>
        <SliderTextConainer>
            <SliderTitle>{texttitle}</SliderTitle>
            <SliderDesc> <HomeIcon/>{desctext}</SliderDesc>
        </SliderTextConainer>
    </SliderContent>
  )
}

export default CustomCategoryCom