import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

const style={
    borderRadius: '50%',
    float: 'left'
};

class Education extends React.Component{

    render(){
        return (
            <div className="huhu"> 
                
                <div className="uncc">
                <img src='./uncc.jpg' alt="Avatar" style={style} />
                <h2 id="h2"><u>Education</u></h2> 
                <h2>University of North Carolina at Charlotte</h2>
                <p>
                    <i>Master of Science in Computer Science<li>January 2017 to May 2018</li></i><br/>
                    Relevant Coursework: Algorithms and Data Structures, Software System Design and 
                    Implementation, Database Systems,Cloud Computing for Data Analysis, Knowledge 
                    discovery in Databases, Machine Learning, Mobile Application Development (Android) and Principles of Information Security and Privacy.
                </p>
                </div>
                <div className="rayat">
                <img src='./bahra.png' alt="Avatar" style={style} /> 
                <h2>Rayat Bahra University</h2>
                <p>
                    
                    Bachelors of Science in Electronics and Computer Science<br/>
                </p>
                </div>
                 </div>
           
        );
    }
}


export default Education;