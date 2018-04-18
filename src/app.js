import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import About from './about.js';
import Education from './education.js';
import Work from './work.js';



const style={
    backgroundImage: 'url(/background3.jpg)'
};
class Header extends React.Component{
    constructor(props){
        super(props);
        this.scroll= scroll.bind(this);
    }

    scroll(){
        this.scrollIntoView(<About />)
    }
    render(){
        return (
    <div className="middle">
    <div className="head">
        <header className="header">
        <h2><a href="#">{"</>"}</a></h2>
        <nav id="nav" >
        <ol>
            <li><a href="#">About</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Work</a></li> 
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ol>
          </nav>
      </header>
</div>
<div className="header">
      <section className="hero">
        <div className="background-image" style={style}></div>
        <div className="hero-content-area">
          <h1>Sarangdeep Singh</h1>
          <h3>Software Engineer . Full Stack Developer . Thinker</h3>
          <ol>
            <li><a href="https://github.com/SARANG3105"><i className="fa fa-github-square fa-2x"/></a></li>
            <li><a href="https://www.linkedin.com/in/sarangdeep-singh/"><i className="fa fa-linkedin-square fa-2x"/></a></li>
            <li><a href="https://stackoverflow.com/users/8886887/sarangdeep-singh"><i className="fa fa-stack-overflow fa-2x"/></a></li>
            <li><a href="https://www.facebook.com/sarang.deepsingh"><i className="fa fa-facebook-square fa-2x"/></a></li>
            </ol> 
          <button onClick={this.scroll}><a href="#"><i className="fa fa-chevron-circle-down fa-3x"/></a></button>
        </div>
      </section>
      </div>
     
      <div className="aboutMe">
      <About key="about" />
      </div>
      <div className="education">
            <Education key="edu" />
      </div>
      <div className="work">
            <Work />
      </div>
      </div>
        );
    };
};

ReactDOM.render(<Header/>, document.getElementById('app'));