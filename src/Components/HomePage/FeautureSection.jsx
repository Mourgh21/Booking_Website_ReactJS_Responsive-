import React from 'react'
import CustomHeader from '../Custom/CustomHeader'
import styled from 'styled-components'
import CutsomFeatureGridBox from '../Custom/CutsomFeatureGridBox';
import featuredData from '../../models/featured';
import { Mobile } from '../../Utils/Responsive';


const Container = styled.section`
    padding: 0 10rem;

        
    ${Mobile({
        padding: '0 5rem',

    })}
`;


const FeatureGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;

    
    ${Mobile({
        gridTemplateColumns: 'repeat(1, 1fr)',
        gap: '20px',

    })}


`;


const FeautureSection = () => {
  return (
    <Container>
        <CustomHeader 
        title="Live anywhere"
        description="Keep calm & travel on"
        />
        <FeatureGridContainer>
            {featuredData.map((data, index) => {
                return (
                    <CutsomFeatureGridBox key={index} data={data} />
                );
        
            })}
        </FeatureGridContainer>
    </Container>
  )
}

export default FeautureSection