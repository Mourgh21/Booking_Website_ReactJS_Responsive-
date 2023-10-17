import React from 'react'
import CustomImgContainer from './CustomImgContainer'
import styled from 'styled-components'

const GridBox = styled.div`
    cursor: pointer;
    margin: 4.5rem 1rem 0 0;
`;

const ImageBox = styled.div`
    border-radius: 20px;
    overflow: hidden;
`;


const TextContainer = styled.div`
    text-align: center;

`;


const FeaturedTitle = styled.p`
    font-size: 1.8rem;
    font-weight: 600;
    color: #23262f;
    cursor: pointer;
    &:hover{
        color: blue;
    }
    margin: 1rem 0;

`;

const FeaturedDes = styled.p`
    font-size: 1.6rem;
    color: #777E90;
`;




const CutsomFeatureGridBox = ({data}) => {
    const {imageSrc, title, subtitle} = data;
  return (
    <GridBox>
        <ImageBox>
            <CustomImgContainer 
            src={imageSrc}
            borderRoduis="15px"
            />
        </ImageBox>
        <TextContainer>
            <FeaturedTitle>{title}</FeaturedTitle>
            <FeaturedDes>{subtitle}</FeaturedDes>

        </TextContainer>
    </GridBox>
  )
}

export default CutsomFeatureGridBox