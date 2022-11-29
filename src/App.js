import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Logo from "./Components/Logo";
import Contact from "./Components/Contact";
import ColorPalette from "./Components/ColorPalette";
import Buttons from "./Components/Buttons";
import Fonts from "./Components/Fonts";
import data from "./data.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      data: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }



  componentDidMount() {
    this.setState({ data: data });
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.data.main} />
        <About data={this.state.data.main} />
        <Logo data={this.state.data.logo} />
        <ColorPalette data={this.state.data.colorPalette} />
        <Fonts data={this.state.data.fonts} />
        <Buttons />
        <Contact data={this.state.data.main} />
        <Footer data={this.state.data.main} />
      </div>
    );
  }
}

export default App;
