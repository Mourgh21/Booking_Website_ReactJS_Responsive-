import React from 'react'
import CustomHeader from '../Custom/CustomHeader'
import styled from 'styled-components'
import CustomPlaceGridBox from '../Custom/CustomPlaceGridBox';
import CustomButton from '../Custom/CustomButton';
import { Mobile } from '../../Utils/Responsive';


const Container = styled.section`
    margin: 5rem 4rem;

      ${Mobile({
      margin: '0 0',
    })}
`;

const Wrapper = styled.div`
    padding: 6rem 4rem;
    background-color: #f4f5f6;
    border-radius: 20px;

      ${Mobile({
      borderRadius: '0',
      padding: '4rem 3rem',

    })}
`;

const PlaceGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px 15px;

    ${Mobile({
      gridTemplateColumns: 'repeat(1, 1fr)',

    })}
`;


const PlaceSection = () => {
  return (
    <Container>
        <Wrapper>
            <CustomHeader 
            title="Go somewhere"
            description="Let's go on an adventure"
            textAlign="left"
            />

            <PlaceGridContainer>
                <CustomPlaceGridBox/>
                <CustomPlaceGridBox/>
                <CustomPlaceGridBox/>
            </PlaceGridContainer>

            <CustomButton 
            title="View all"
            fontSize="15px"
            padding="8px"
            display="block"
            margin="40px auto"
            />
        </Wrapper>
    </Container>
  )
}

export default PlaceSection