import React, { Component } from "react";
import Slide from "react-reveal";
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';


const Color = styled.div`
background-color: ${props => props.colorsHex};
width: 10rem;
height: 10rem;
border-radius: 100%;
padding-left: 0;
`;

const H3Span = styled.h3`
span {
font-size: 18px !important;
}
`;

const H1Span = styled.h1`
span {
font-size: 24px !important;
padding-bottom: 3px;
border-bottom: 3px solid #0F3D4B !important;
}
`;

const ColorRow = styled.div`
padding-left: 20px !important;
padding-top: 10px !important;
&:last-child {
  margin-bottom: 25px !important;

}
`;

const ColorCol = styled.div`
&:first-child {
  padding-left: 35px;
}
`;

const ColorSection = styled.div`
margin-bottom: 7rem;`;

const Text = styled.p`
font-size: 1.5rem;
line-height: 2.25rem;
color: rgba(0,0,0, 0.4);
`;

const ColorWrapper = styled.div`
padding-left: 0 !important;
`;

class Fonts extends Component {


  render() {
    // if (!this.props.data) return null;



    return (
      <section id="fonts">
        <ColorSection className="row ">
          <div className="six columns header-col">
            <H1Span>
              <span>Fonts</span>
            </H1Span>
            
        </div>
          <div className="six columns header-col">
          </div>
        </ColorSection>
              

        <Slide left duration={1300}>
         
        </Slide>

        <Slide left duration={1300}>
         
        </Slide>

        <Slide left duration={1300}>
        
        </Slide>
      </section>
    );
  }
}

export default Fonts;
