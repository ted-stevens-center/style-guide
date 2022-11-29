import React, { Component } from "react";
import Fade from "react-reveal";
import styled from 'styled-components';

const BkImage = styled.div`
    background-image: url(images/northern_lights_bg2.jpeg);
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 0;
    top: 0;
`;

const Hide = styled.div`
display: none;
`;

const StyledHeader = styled.header`
height: 100vh;
`;

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <StyledHeader id="home">
        <BkImage></BkImage>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                Assets
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#logo">
                Logo
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#colorPalette">
                Color Palette
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#fonts">
                Icons
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Forms
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Hide>
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
            </Hide>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </StyledHeader>
    );
  }
}

export default Header;
