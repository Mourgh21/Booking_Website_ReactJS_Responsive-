import React from 'react'
import styled from 'styled-components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Form = styled.div`
    max-width: 300px;
    position: relative;
`;

const NumberInput = styled.input`
    padding: 15px;
    border: 1px solid #777E90;
    border-radius: 50px;
    width:100%;
`;

const Button = styled.button`
    background-color: #3871Fe;
    border: none;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    right: -22px;
    bottom: 9px;
    width: 35px;
    height: 35px;
    cursor: pointer;

`;

const ArrowIcon = styled.div`
    color: White;
`;





const CustomForm = () => {
  return (
    <Form>
        <NumberInput type="text" placeholder="Enter your number" />
        <Button>
            <ArrowIcon>
                <ArrowForwardIcon/>
            </ArrowIcon>
        </Button>
    </Form>
  )
}

export default CustomForm