import React from 'react'
import {Link} from 'react-router-dom'
class Feedback extends React.Component{
    render(){
        return <div>
            <form action="" method="get">
            <p>Please provide your feedback here!</p>
            <textarea></textarea>
            <p>Rating of your interview experience(out of 5)</p>
            <input type="text"></input>
            <input type="submit" value="Submit your feedback"></input>
            </form>
            </div>
    }
}
export default Feedback;