import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import homeCss from './home.css';
import axios from 'axios';
// const data =[{
//   "JobId":"123",
//   "JobDesc":"Developer",
//   "interviewDate":"12-02-2019",
//   "interviewerFeedback":"On Hold"
// },
// {
//   "JobId":"1234",
//   "JobDesc":"Analyst",
//   "interviewDate":"19-02-2019",
//   "interviewerFeedback":""
// },
// {
//   "JobId":"12314",
//   "JobDesc":"Specialist",
//   "interviewDate":"19-02-2019",
//   "interviewerFeedback":""
// },
// {
//   "JobId":"12324",
//   "JobDesc":"Lead",
//   "interviewDate":"19-02-2019",
//   "interviewerFeedback":""
// }
// ];

class Home extends React.Component {
    constructor(){
        super();
        this.state={
          data: [],
        }
        this.handleClick=this.handleClick.bind(this);
      }
      
      componentWillMount(){
       axios.get(`http://localhost:8080/applicant`)
        .then( res =>{
           res.data
           this.setState({data: res.data});
        }).catch((err)=>{console.log(err)})
      }
      handleClick(){
        axios.get(`http://localhost:8080/applicant`)
        .then( res =>{
           res.data
           this.setState({data: res.data});
        })
      }
    render() {
        return <div>

            <h3>List Of Jobs</h3>
          
                {this.state.data.map(data =>
                   <p id="rcorners2">
                   <div class="rightAlign">
                    <label class="fontWeight">Job Id :</label><label >{data.JobId}</label><br/>
                    <label class="fontWeight">Position :</label><label>{data.JobName}</label>
                    </div>
                    <div class="leftAlign"> 
                    <label class="fontWeight">Job Desc :</label><label >{data.JobDescription}</label><br/>
                    <label class="fontWeight">Skill Required :</label><label >{data.skillsRequired}</label>
                    </div>
                    {<label><button onclick={this.handleClick} class="applyButton" >Apply</button></label>}
                </p>)}
          </div>
                
    }
    }

export default Home;