
const style={
    backgroundImage: 'url(/background3.jpg)'
};
class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
    <div>
        <header>
        <h2><a href="#">Portfolio</a></h2>
        <nav>
          <li><a href="#">About</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </nav>
      </header>

      <section className="hero">
        <div className="background-image" style={style}></div>
        <div className="hero-content-area">
          <h1>Sarangdeep Singh</h1>
          <h3>Software Engineer . Full Stack Developer . Thinker</h3>
          <a href="#" className="btn">Contact Us Now</a>
        </div>
      </section>
      </div>
        );
    }
}

class About extends React.Component{
    
}
ReactDOM.render(<Header/>, document.getElementById('app'));