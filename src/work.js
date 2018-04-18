
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

const style={
    borderRadius: '50%',
    float: 'left'
};

class Work extends React.Component{

    render(){
        return (
            <div className="inner-work"> 
                
                <div className="uncc2">
                <img src='./uncc.jpg' alt="Avatar" style={style} />
                <h2 id="h2"><u>Work Experience</u></h2> 
                <h2>University of North Carolina at Charlotte</h2>
                <p>
                    <i>Graduate Teaching Assistant<li>January 2018 to May 2018</li></i><br/>
                    Relevant Coursework: Algorithms and Data Structures, Software System Design and 
                    Implementation, Database Systems,Cloud Computing for Data Analysis, Knowledge 
                    discovery in Databases, Machine Learning, Mobile Application Development (Android) and Principles of Information Security and Privacy.
                </p>
                </div>
                <div className="oops">
                <img src='./oops.png' alt="Avatar" style={style} /> 
                <h2>OOPS Info Solutions Pvt. Ltd.</h2>
                <p>
                    
                   Junior Java Developer<br/>
                </p>
                </div>
                 </div>
           
        );
    }
}


export default Work;