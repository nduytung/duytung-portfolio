import "./App.css";
import "./grid.css";
import "./fonts/BungeeInline-Regular.ttf";
import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Greeting from "./components/Greeting";
import SkillList from "./components/SkillList";
import CommentList from "./components/CommentList";
import Footer from "./components/Footer";
import PortContentList from "./components/PortContentList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //TEN CAC LIST ITEM TRONG 2 NAV BAR
      navBar: ["PRODUCTS", "SKILLS", "ABOUT", "PORTFOLIO", "CONTACT"],
      linkContent: [
        "Posters",
        "Prizes",
        "Projects",
        "Event Managing",
        "Social Contents",
      ],
      //DANH SACH CAC SECTION
      title: ["Deployed ", "Personal", "Coleagues ", "Get in touch"],
      titleEmph: [
        "Projects and Media Publication",
        "Qualifications",
        "Observations",
        "with me",
      ],
    };
  }

  render() {
    const { navBar, linkContent, titleEmph, title } = this.state;
    return (
      <div className="body">
        <div className="main-background"> </div>
        <div className="cover">
          <NavBar content={navBar} className="main-nav-bar" />
          <Greeting />
        </div>

        <div className="content">
          <div className="portfolio" id="section1">
            <Header title={title[0]} titleEmph={titleEmph[0]} />
            <NavBar content={linkContent} />
            <PortContentList />
          </div>

          <div className="my-skill" id="section2">
            <Header title={title[1]} titleEmph={titleEmph[1]} />
            <SkillList />
          </div>

          <div className="about-me" id="section3">
            <AboutMe />
          </div>

          <div className="comment" id="section4">
            <Header title={title[2]} titleEmph={titleEmph[2]} />
            <CommentList />
          </div>

          <div className="contact" id="section5">
            <Header title={title[3]} titleEmph={titleEmph[3]} />
            <Contact />
          </div>

          <div className="footer-container" id="section6">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
