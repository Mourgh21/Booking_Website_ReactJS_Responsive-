import React from 'react'
import styled from 'styled-components'


const ImageContainer = styled.div`
    border-radius: ${(props) => props.borderRoduis};
    transition: transform 0.6s;

    &:hover{
        transform: scale(1.1);
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const CustomImgContainer = ({src, alt, borderRoduis}) => {
  return (
    <ImageContainer borderRoduis={borderRoduis}>
        <Image src={src} alt={alt} />
    </ImageContainer>
  )
}

export default CustomImgContainer