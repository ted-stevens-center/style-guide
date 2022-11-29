import React, { Component } from "react";
import Slide from "react-reveal";
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

const ButtonsWrapper = styled.section`
padding-top: 7rem;
padding-bottom: 7rem;
background-color: #0C3352;
`;

const ButtonPrimary = styled.button`
border: 1.5px solid #f2f2f2;
box-shadow: 2px 2px 2px rgba(16,16,16, 1);
padding: .75rem 1.75rem;
border-radius: 11px;
font-size: max(1.25rem, 16px);
font-weight: regular;
letter-spacing: 1px;
text-transform: uppercase;
background-color: transparent;
transition: box-shadow .5s ease-in, border 300ms ease-out, color 300ms ease-in, text-shadow 300ms ease-in;
&:hover, &:active {
    border: 1.5px solid rgba(1,186,203, 1);
    box-shadow: 0 0 10px rgba(1,186,203, 1);
    background-color: transparent;
    color:  rgba(1,186,203, 1);
    text-shadow: 2px 2px rgba(16,16,16,1);
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
                                <ButtonPrimary>Learn More</ButtonPrimary>
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
