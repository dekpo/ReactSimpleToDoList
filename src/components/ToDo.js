import React from 'react';
import { FaCheck } from 'react-icons/fa';

class ToDo extends React.Component{
    render(){
        return(
            <li className="list-group-item">
                { this.props.task.name }
            <button className="btn btn-sm btn-outline-success float-end"><FaCheck /></button>
            </li>
        )
    }
}

export default ToDo