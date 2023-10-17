import React from 'react'
import styled from 'styled-components'
import CustomHeader from '../Custom/CustomHeader';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import sliderData from '../../models/Adventure';



const Container = styled.section`
    margin: 7rem 3rem;
`;


const StyledSlider = styled(Slider)`
    .slick-slide{
      outline: none;
      width: 100%;
      padding: 5rem 0;
    }
`;


const SliderContent = styled.div`
    display: flex !important;
    align-items: center;
`;


const Image = styled.img`
    max-width: 100%;
    height: auto;
    margin-top: 1rem;
    margin-right: 1rem;
`;



const SliderTextContainer = styled.div``;


const SlideText = styled.p`
    font-size: 2rem;
    margin: 2rem 0;

`;


const SlidePlaces = styled.a`
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #E6E8Ec;
    padding: 5px 10px;
    border-radius: 20px;
`;






const AdventureSection = () => {

  const settings = {
    slidesToShow: 3,
    speed: 900,
    infinite: true,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,

    responsive: [
  {
    breakpoint: 629,
    settings: {
      slidesToShow: 1,
    }
  }
]




  }
  return (
    <Container>
      <CustomHeader 
      title="Let's go on an adventure"
      description="Find and book a great experience"
      />

      <StyledSlider {...settings}>
        {sliderData.map((data, index)=>(
        <SliderContent key={data.id}>
          <Image src={data.image}/>
          <SliderTextContainer>
            <SlideText>{data.sliderrText}</SlideText>
            <SlidePlaces>{data.linkText}</SlidePlaces>
          </SliderTextContainer>
        </SliderContent>
        ))}
      </StyledSlider>
    </Container>

  )
}

export default AdventureSection