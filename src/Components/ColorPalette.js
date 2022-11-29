import React, { Component } from "react";
import Slide from "react-reveal";
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';


const ColorPaletteWrapper = styled.section`
background-color: #ffffff;
padding-top: 7rem;
padding-bottom: 7rem;
`

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
  border-bottom: 3px solid #01BACB;
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

class ColorPalette extends Component {


  render() {
    if (!this.props.data) return null;

    const primaryText = this.props.data.primaryText;
    const accentsText = this.props.data.accentsText;
    const tintsShadesText = this.props.data.tintsShadesText;
 

    const primary = this.props.data.primary.map((colors) => {
      
      return (
        <ColorWrapper className="four columns">
          <Color colorsHex={colors.hex}></Color>
          <ColorRow className="row">
            hex code: {colors.hex}
          </ColorRow>
          <ColorRow className="row">
            rgb: ({colors.rgb})
          </ColorRow>
        </ColorWrapper>
      );
    });

    const accents = this.props.data.accents.map((colors) => {

      return (
        <ColorWrapper className="six columns">
          <Color colorsHex={colors.hex}></Color>
          <ColorRow className="row">
            hex code: {colors.hex}
          </ColorRow>
          <ColorRow className="row">
            rgb: ({colors.rgb})
          </ColorRow>
        </ColorWrapper>
      );
    });

    const tintsShades = this.props.data.tintsShades.map((colors) => {

      return (
        <ColorWrapper className="four columns">
          <Color colorsHex={colors.hex}></Color>
          <ColorRow className="row">
            hex code: {colors.hex}
          </ColorRow>
          <ColorRow className="row">
            rgb: ({colors.rgb})
          </ColorRow>
        </ColorWrapper>
      );
    });

    return (
      <ColorPaletteWrapper id="colorPalette">
        <ColorSection className="row ">
          <div className="five columns header-col">
            <H1Span>
              <span>Color Palette</span>
            </H1Span>
            
        </div>
          <div className="seven columns header-col">
          </div>
        </ColorSection>
              

        <Slide left duration={1300}>
          <ColorSection className="row skill">
            <div className="five columns header-col">
              <H3Span>
                <span>Primary</span>
              </H3Span>
              <Text>
                {primaryText}
              </Text>
            </div>

            <div className="seven columns main-col">
              

              <ColorCol>
                <Row>{primary}</Row>
              </ColorCol>
            </div>
          </ColorSection>
        </Slide>

        <Slide left duration={1300}>
          <ColorSection className="row skill">
            <div className="five columns header-col">
              <H3Span>
                <span>Accent</span>
              </H3Span>
              <Text >
                {accentsText}
              </Text>
            </div>

            <div className="seven columns main-col">


              <ColorCol>
                <Row>{accents}</Row>
              </ColorCol>
            </div>
          </ColorSection>
        </Slide>

        <Slide left duration={1300}>
          <ColorSection className="row skill">
            <div className="five columns header-col">
              <H3Span>
                <span>Tint & Shade</span>
              </H3Span>
              <Text >
                {tintsShadesText}
              </Text>
            </div>
            

            <div className="seven columns main-col">


              <ColorCol>
                <Row>{tintsShades}</Row>
              </ColorCol>
            </div>
          </ColorSection>
        </Slide>
      </ColorPaletteWrapper>
    );
  }
}

export default ColorPalette;
