import React from 'react'
import CustomImgContainer from './CustomImgContainer'
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';
import imageimage from '../../Images/imageimage.png'


const GridBox = styled.div`
    background-color: #fcfcfc;
    overflow: hidden;
    cursor: pointer;
    margin: 3rem 1.5rem;
    border-radius: 15px;
    
    &:hover{
        color: blue;
    }
`;

const Content = styled.div`
    padding: 2rem 1rem;
`;

const TitleContainr = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`;

const PlaceContainer = styled.div``;

const NameText = styled.h2`
    font-size: 1.8rem;
    margin-bottom: 5px;
`;

const PlaceText = styled.p`
    font-size: 1.2rem;
    color: #777e90;

`;

const PriceContainer = styled.div`
    border: 3px solid #58C27d;
    border-radius: 5px;
    color: #58C27d;
    font-size: 15px;
    font-weight: bold;
    padding: 8px;

`;

const Hr = styled.hr`
    margin-bottom: 10px;
`;

const DiscountPrice = styled.p`
    text-decoration: line-through;
    margin: 3px 0;
`;

const NormalPrice = styled.p``;

const DateContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DateText = styled.p`
    font-size: 1.4rem;
    color: #777e90;
`;

const Rating = styled.div`
    display: flex;
`;

const RatingText = styled.p`
    font-size: 1.4rem;
    font-weight: bold;
    margin-left: 1.4rem;
    color: black;

`;


const CustomPlaceGridBox = () => {
  return (
    <GridBox>
        <CustomImgContainer src={imageimage} />

        <Content>
            <TitleContainr>
                <PlaceContainer>
                    <NameText>Entire serviced classy nature house</NameText>
                    <PlaceText>Manitoba Canada</PlaceText>
                </PlaceContainer>
                <PriceContainer>
                    <DiscountPrice>$200</DiscountPrice>
                    <NormalPrice>$150</NormalPrice>
                </PriceContainer>
            </TitleContainr>
            <Hr/>
            <DateContainer>
                <DateText>2023/12/12</DateText>
                <Rating>
                    <StarIcon style={{fontSize: 15, color: 'yellow'}}/>
                    <RatingText>4.5</RatingText>
                </Rating>
            </DateContainer>
        </Content>
    </GridBox>
  )
}

export default CustomPlaceGridBox