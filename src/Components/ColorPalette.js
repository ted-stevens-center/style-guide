import React, { Component } from "react";
import Slide from "react-reveal";
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';


const Color = styled.div`
background-color: ${props => props.colorsHex};
width: 10rem;
height: 10rem;
border-radius: 100%;
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
padding-left: 0 !important;
padding-top: 10px !important;
&:last-child {
  margin-bottom: 25px !important;

}
`;

class ColorPalette extends Component {


  render() {
    if (!this.props.data) return null;

    const primaryText = this.props.data.primaryText;
    const accentsText = this.props.data.accentsText;
    const tintsShadesText = this.props.data.tintsShadesText;
 

    const primary = this.props.data.primary.map((colors) => {
      
      return (
        <div className="four columns">
          <Color colorsHex={colors.hex}></Color>
          <ColorRow className="row">
            {colors.hex}
          </ColorRow>
          <ColorRow className="row">
            {colors.rgb}
          </ColorRow>
        </div>
      );
    });

    const accents = this.props.data.accents.map((colors) => {

      return (
        <div className="six columns">
          <Color colorsHex={colors.hex}></Color>
          <ColorRow className="row">
            {colors.hex}
          </ColorRow>
          <ColorRow className="row">
            {colors.rgb}
          </ColorRow>
        </div>
      );
    });

    const tintsShades = this.props.data.tintsShades.map((colors) => {

      return (
        <div className="four columns">
          <Color colorsHex={colors.hex}></Color>
          <ColorRow className="row">
            {colors.hex}
          </ColorRow>
          <ColorRow className="row">
            {colors.rgb}
          </ColorRow>
        </div>
      );
    });

    return (
      <section id="resume">
        <div className="row ">
          <div className="five columns header-col">
            <H1Span>
              <span>Color Palette</span>
            </H1Span>
            
        </div>
          <div className="seven columns header-col">
          </div>
        </div>
              

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="five columns header-col">
              <H3Span>
                <span>Primary</span>
              </H3Span>
              <div className="row">
                {tintsShadesText}
              </div>
            </div>

            <div className="seven columns main-col">
              

              <Row>
                <Row>{primary}</Row>
              </Row>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="five columns header-col">
              <H3Span>
                <span>Accent</span>
              </H3Span>
              <div className="row">
                {accentsText}
              </div>
            </div>

            <div className="seven columns main-col">


              <Row>
                <Row>{accents}</Row>
              </Row>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="five columns header-col">
              <H3Span>
                <span>Tint & Shade</span>
              </H3Span>
              <div className="row">
                {tintsShadesText}
              </div>
            </div>

            <div className="seven columns main-col">


              <Row>
                <Row>{tintsShades}</Row>
              </Row>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default ColorPalette;
