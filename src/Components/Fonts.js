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



const Text = styled.p`
font-size: 1.5rem;
line-height: 2.25rem;
color: rgba(0,0,0, 0.4);
`;

const StyledH1 = styled.h1`
font-family: "bierstadt-bold", sans-serif;`;

const StyledH2 = styled.h2`
font-family: "bierstadt-bold", sans-serif;
margin-bottom: 10px;`;
const StyledH3 = styled.h3`
font-family: "bierstadt-bold", sans-serif;
margin-bottom: 10px;`;
const StyledH4 = styled.h4`
font-family: "bierstadt-bold", sans-serif;
margin-bottom: 10px;
`;
const StyledH5 = styled.h5`
font-family: "bierstadt-bold", sans-serif;
margin-bottom: 10px;
`;
const StyledP = styled.p`
font-family: "bierstadt-bold", sans-serif;
margin-bottom: 10px;`;
const StyledSpan = styled.span`
font-family: "bierstadt-bold", sans-serif;
margin-bottom: 10px;`;
const StyledFigcaption = styled.figcaption`
font-family: "bierstadt-bold", sans-serif;
margin-bottom: 10px;`;
const StyledEm = styled.em`
font-family: "bierstadt-bold", sans-serif;
margin-bottom: 10px;`;

const FontSection = styled.div`
margin-bottom: 7rem;
> div {
  margin-bottom: 25px;
}
`

const FontWrapper = styled.section`
background-color: #ffffff;
padding-bottom: 40px;
span:first-child {
  text-transform: uppercase;
  display: inline-block;
  width: 20%;
  float: left;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 1.36px;
  text-transform: uppercase;
  line-height: 48px;
}
h1,h2,h3,h4,h5, p, span, figcaption, em {
  display: inline-block;
  width: 90%;
  float: left;
}
${StyledH1}{
font-size: max(3.44rem, 48px);
font-weight: bold;
letter-spacing: 1.36px;
text-transform: uppercase;
line-height: 5rem;
margin-bottom: 20px;
} 

${StyledH2}{
font-size: max(1.25rem, 20px);
font-weight: regular;
letter-spacing: 2px;
text-transform: uppercase;
line-height: 2.25rem;
margin-bottom: 20px;
} 
${StyledH3}{
font-size: max(1.25rem, 19px);
font-weight: regular;
letter-spacing: 2px;
text-transform: uppercase;
line-height: 2.25rem;
margin-bottom: 20px;
} 
${StyledH4}{
font-size: max(1.25rem, 16px);
font-weight: regular;
letter-spacing: 1px;
text-transform: uppercase;
margin-bottom: 20px;
} 
${StyledH5}{
font-size: max(.9rem, 13px);
font-weight: regular;
letter-spacing: 1px;
text-transform: uppercase;
margin-bottom: 20px;
} 
`;

const HeadingContainer = styled.div`
margin-bottom: 40px;
display: flex;
height: fit-content;
`

class Fonts extends Component {

  render() {
    if (!this.props.data) return null;

    return (
      <FontWrapper id="fontsNew">
        <FontSection className="row ">
          <div className="six columns header-col">
          <H1Span>
            <span>Fonts</span>
          </H1Span>
          </div>
          <div className="six columns header-col">
          </div>
        </FontSection>
              
        <FontSection className="row ">
          <div className="twelve columns header-col">
            

            <Slide left duration={1300}>
              <HeadingContainer>
                <span>{this.props.data.heading.h1.h}</span>
                <StyledH1>
                  {this.props.data.heading.h1.font}
                </StyledH1>
              </HeadingContainer>
             
            </Slide>
            <Slide left duration={1300}>
              <HeadingContainer>
                <span>{this.props.data.heading.h2.h}</span>
                <StyledH2>
                  {this.props.data.heading.h2.font}
                </StyledH2>
              </HeadingContainer>
             
            </Slide>
            <Slide left duration={1300}>
              <HeadingContainer>
                <span>{this.props.data.heading.h3.h}</span>
                <StyledH3>
                  {this.props.data.heading.h3.font}
                </StyledH3>
              </HeadingContainer>
             
            </Slide>
            <Slide left duration={1300}>
              <HeadingContainer>
                <span>{this.props.data.heading.h4.h}</span>
                <StyledH4>
                  {this.props.data.heading.h4.font}
                </StyledH4>
              </HeadingContainer>
            </Slide>
            <Slide left duration={1300}>
              <HeadingContainer>
                <span>{this.props.data.heading.h5.h}</span>
                <StyledH5>
                  {this.props.data.heading.h5.font}
                </StyledH5>
              </HeadingContainer>
              
            </Slide>

          </div>
          <div className="twelve columns header-col">
            <Slide left duration={1300}>
              <HeadingContainer>
              <span>{this.props.data.paragraph.p.p}</span>
              <StyledP>
                {this.props.data.paragraph.p.font}
              </StyledP>
              </HeadingContainer>
            </Slide>

            <Slide left duration={1300}>
            <HeadingContainer>
              <span>{this.props.data.paragraph.span.p}</span>
              <StyledSpan>
                {this.props.data.paragraph.span.font}
              </StyledSpan>
            </HeadingContainer>
            </Slide>

            <Slide left duration={1300}>
              <HeadingContainer>
                <span>{this.props.data.paragraph.figcaption.p}</span>
                <StyledSpan>
                  {this.props.data.paragraph.figcaption.font}
                </StyledSpan>
              </HeadingContainer>
            </Slide>

            <Slide left duration={1300}>
              <HeadingContainer>
                <span>{this.props.data.paragraph.em.p}</span>
                <StyledSpan>
                  {this.props.data.paragraph.em.font}
                </StyledSpan>
              </HeadingContainer>
            </Slide>
          </div>
        </FontSection>
      
      </FontWrapper>
    );
  }
}

export default Fonts;
