import React from 'react'
import styled from 'styled-components'
import { Mobile } from '../../Utils/Responsive';



const HeaderContainer = styled.div`
    text-align: ${(props) => props.textAlign || 'center'};
`;

const HeaderTitles = styled.h2`
    font-size: 5rem;

    ${Mobile({
      fontSize: '3.5rem',
    })}

`;

const HeaderDescription = styled.p`
    font-size: 2rem;
    margin-top: 1rem;
    color: #777e90;

    ${Mobile({
      fontSize: '2rem',
    })}
`;


const CustomHeader = ({title, description, textAlign }) => {
  return (

    <HeaderContainer textAlign={textAlign} >
      <HeaderTitles>{title}</HeaderTitles>
      <HeaderDescription>{description}</HeaderDescription>
    </HeaderContainer>
  )
}

export default CustomHeader