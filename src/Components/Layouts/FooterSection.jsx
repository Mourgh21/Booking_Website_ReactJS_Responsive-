import React from 'react'
import styled from 'styled-components'
import logo_icon from '../../Images/logo_icon.png'
import CustomForm from '../Custom/CustomForm';
import { Mobile } from '../../Utils/Responsive';


const Container = styled.section``;

const Hr = styled.hr``;


const Wrapper = styled.div`
    margin: 4rem;
    padding: 0 7rem;

    ${Mobile({
      padding: '0 0',
    })}
`;

const TopContent = styled.div`
    display: flex;
    padding: 30px 0 30px;
    

    ${Mobile({
      flexDirection: 'column',
      padding: '0',
    })}
`;

const Logo = styled.div`
    flex: 1;
`;

const Image = styled.img``;

const UsefulLinks = styled.div`
    flex: 2;
    padding: 0 2px;
`;

const TextLinks = styled.div`
    display: flex;
    flex-wrap: wrap;

    ${Mobile({
      margin: '4rem 0',
    })}
`;

const Text = styled.a`
    font-size: 1.5rem;
    font-weight: bold;
    color: #777e90;
    padding: 1rem;
    margin: 1rem 8rem 0 2rem;

    ${Mobile({
      margin: '1rem 7rem 0 2rem',
    })}

`;

const ComminutyCom = styled.div` 
    flex: 1;

    ${Mobile({
      margin: '2.3rem 0',
    })}
`;

const ComText = styled.p`
     font-size: 1.5rem;
     font-weight: bold;
     margin-bottom: 1.5rem;

`;

const BottomContent = styled.div`
    padding: 2rem 0;
`;

const CopyRightText = styled.p`
    font-size: 1.5rem;
`;






const FooterSection = () => {
  return (
    <Container>
      <Hr/>
      <Wrapper>
        <TopContent>
          <Logo>
            <Image src={logo_icon} />
          </Logo>
          <UsefulLinks>
            <TextLinks>
              <Text>Stays</Text>
              <Text>Flights</Text>
              <Text>Support</Text>
              <Text>Cars</Text>
              <Text>Things to do</Text>
            </TextLinks>
          </UsefulLinks>
          <ComminutyCom>
            <ComText>JOIN OUR COMMUNITY🔥</ComText>
            <CustomForm/>
          </ComminutyCom>
        </TopContent>
        <BottomContent>
          <CopyRightText>Copyright© 2023 Abdessamad Mourgh. All rights reserved.</CopyRightText>
        </BottomContent>
      </Wrapper>

    </Container>
  )
}

export default FooterSection