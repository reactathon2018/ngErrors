import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import App from './App';

class Jobs extends React.Component{
  constructor(){
    super();
    this.state={
      data: [],
    }
    this.handleClick=this.handleClick.bind(this);
  }
  //'Access-Control-Allow-Origin': '*',
  componentWillMount(){
    var config = {
    //  headers:{'Access-Control-Request-Headers':'*'}
    };
    axios.get(`http://localhost:8080/findAppliedAll`,config)
    .then( res =>{
       res.data
       this.setState({data: res.data});
    }).catch((err)=>{console.log(err)})
  }
  handleClick(){
    axios.get(`http://localhost:8080/findAppliedAll`)
    .then( res =>{
       res.data
       this.setState({data: res.data});
    })
  }
    render(){ return <div>

      <h3>Applied Jobs</h3>
    
          {this.state.data.map(data =>
             <p id="rcorners2">
             <div class="rightAlign">
              <label class="fontWeight">Job Id :</label><label >{data.JobId}</label><br/>
              <label class="fontWeight">Position :</label><label>{data.JobName}</label>
              
              </div>
              <div class="leftAlign"> 
              <label class="fontWeight">Job Desc :</label><label >{data.JobDescription}</label><br/>
              <label class="fontWeight">Skill Required :</label><label >{data.skillsRequired}</label><br/>
              <label class="fontWeight">Interviewer Feedback :</label><label>{data.interviewerFeedback}</label>
              </div>
              
          </p>)}
    </div>}
}
export default Jobs;
