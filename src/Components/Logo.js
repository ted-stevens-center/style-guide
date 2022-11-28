import React, { Component } from "react";
import Slide from "react-reveal";
import styled from 'styled-components';


const MainLogoContainer = styled.div`
      width: calc(33% - 2rem);
      margin: 0 1rem;
      display: inline-block;
      `;

const HorizontalLogoContainer = styled.div`
width: 100%;
`;

const LogoSection = styled.section`
background-color: #dedede !important;

.parent  {
  border-bottom: 1px solid #ccc;
}

`;

class Logo extends Component {


  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const main = this.props.data.main.map(function (main) {
      const MainLogo = styled.div`
      background-image: url(${main.url});
          background-repeat: no-repeat;
    background-size: contain;
    height: 20rem;
    width: auto;
      `;

      return (
        <MainLogoContainer key={main.url}>
          <MainLogo className="info">
            
          </MainLogo>
          <p>{main.description}</p>
        </MainLogoContainer>
      );
    });

    const horizontal = this.props.data.horizontal.map(function (horizontal) {
      const HorizontalLogo = styled.div`
      background-image: url(${horizontal.url});
      background-repeat: no-repeat;
      background-size: contain;
      height: 20rem;
      width: auto;
      `;
      return (
        <HorizontalLogoContainer key={horizontal.url}>
          <HorizontalLogo className="info">
            
          </HorizontalLogo>
          <p>{horizontal.description}</p>
        </HorizontalLogoContainer>
      );
    });

    // const skills = this.props.data.skills.map((skills) => {
    //   const backgroundColor = this.getRandomColor();
    //   const className = "bar-expand " + skills.name.toLowerCase();
    //   const width = skills.level;

    //   return (
    //     <li key={skills.name}>
    //       <span style={{ width, backgroundColor }} className={className}></span>
    //       <em>{skills.name}</em>
    //     </li>
    //   );
    // });

    return (
      <LogoSection id="logo">
        <Slide left duration={1300}>
    <div className="row education parent">
            <div className="three columns header-col">
              <h1>
                <span>Logos Main</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{main}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
            <div className="row work parent">
            <div className="three columns header-col">
              <h1>
                <span>Logos Horizontal</span>
              </h1>
            </div>

            <div className="nine columns main-col">{horizontal}</div>
          </div>
        </Slide>

      </LogoSection>
    );
  }
}

export default Logo;
