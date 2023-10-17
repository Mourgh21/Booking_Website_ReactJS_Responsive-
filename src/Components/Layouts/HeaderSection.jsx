import React from 'react'
import logo_icon from '../../Images/logo_icon.png'
import styled from 'styled-components';
import CustomButton from '../Custom/CustomButton';
import PersonIcon from '@mui/icons-material/Person';
import { style } from '@mui/system';
import { Mobile } from '../../Utils/Responsive';



const Container = styled.section`

`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2.5rem 10rem;

       ${Mobile({
      margin: '2.5rem 3rem',
    })}
`;

const Logo = styled.section`
`;

const Image = styled.img`
    width: 17rem

    ${Mobile({
      width: '10rem',
    })}
`;

const RightNav = styled.div`
    display: flex;
    align-items: center;
`;

const ProfileAvatar = styled.div`
    background-color: green;
    margin-left: 1.5rem;
    border-radius: 2.5rem;
    cursor: pointer;
    color: white;

`;

const StyledButton = styled.div`
    ${Mobile({
      display: 'none',
    })}
`;

const HeaderSection = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Image src={logo_icon} alt='' />
        </Logo>
        <RightNav>
        <StyledButton>
          <CustomButton 
          title="List your property"
          borderRadius="3rem"
          padding="1.2rem"
          fontSize="1.5rem"
          fontWeight="bold"
           />
           </StyledButton>
         <ProfileAvatar>
          <PersonIcon style={{fontSize: 24}}/>
         </ProfileAvatar>
        </RightNav>

      </Wrapper> 
    </Container>
  )
}

export default HeaderSection