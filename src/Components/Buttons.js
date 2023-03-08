import React, { Component } from "react";
import Slide from "react-reveal";
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

const ButtonsWrapper = styled.section`
padding-top: 7rem;
padding-bottom: 7rem;
background-color: #c5c5c5;
`;

const ButtonCol = styled.div`
display: inline-flex;
width: 50%;
`

const ButtonPrimary = styled.button`
margin-left: 0;
border-radius: 0;
background-color: #0b3d4c;
border: 0;
width: 142px;
height: 50px;
display: flex;
line-height: 28px;
font-size: 14px;
color: #f2f2f2;
font-weight: 700;
text-decoration: none;
text-transform: uppercase;
align-content: center;
justify-content: center;
opacity: 1;
will-change: transform;
transition: box-shadow,background-color .5s linear;
&:hover, &:active {
   will-change: transform;
    cursor: pointer;
    box-shadow: 0.2rem 0.2rem 0.5rem rgb(0 0 0 / 30%);
    background-color: #01bacb;
}	
`;

const ButtonSecondary = styled.a`
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #f2f2f2;
    margin: 0 25px;
    width: fit-content;
    display: block;
        &:after {
        content: "";
        height: 1px;
        display: block;
        position: relative;
        left: 0;
        padding: 0;
        margin: 0;
        width: 0;
        background: #f2f2f2;
        transition: width 1s;
        }
        &:hover {
            color: #f2f2f2;
            cursor: pointer;
            &:after {
                width: 100%;
            }
        }
   
`;

class Buttons extends Component {

    render() {

        return (
            <ButtonsWrapper id="buttonsNew">

                    <div className="row">
                    <div  className="six columns header-col">
                        <Slide left duration={1300}>
                            <Row>
                                <ButtonCol ><ButtonPrimary>Learn More</ButtonPrimary></ButtonCol>
                                <ButtonCol ><ButtonSecondary>Read More</ButtonSecondary></ButtonCol>
                            </Row>
                        </Slide>

                        
                    </div>
                     <div className="six columns header-col">
                        <Slide left duration={1300}>
                           
                        </Slide>

                        <Slide left duration={1300}>
                           
                        </Slide>

                        <Slide left duration={1300}>
                           
                        </Slide>

                        <Slide left duration={1300}>
                            
                        </Slide>
                    </div>
                </div>
            </ButtonsWrapper>
        );
    }
}

export default Buttons;
