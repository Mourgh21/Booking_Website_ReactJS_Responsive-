import React from 'react'
import CustomHeader from '../Custom/CustomHeader'
import styled from 'styled-components'
import Slider from 'react-slick';
import CustomCategoryCom from '../Custom/CustomCategoryCom';
import categoryData from '../../models/Category';

const Container = styled.section`
    margin: 7rem 0;
`;



const StyledSlider = styled(Slider)`
    .slick-slide{
      outline: none;
      width: 100%;
      padding: 5rem 0;
    }
`;

const CategorySection = () => {

    const settings = {
    slidesToShow: 4,
    speed: 900,
    infinite: false,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,

//Showing One Slide:
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
        title="Browse by Category"
        description="Let's go on an adventure" />

        <StyledSlider {...settings}>

        {categoryData.map((data, index)=>(
           <CustomCategoryCom key={index} data={data} />

        ))}

      </StyledSlider>
    </Container>
  )
}

export default CategorySection