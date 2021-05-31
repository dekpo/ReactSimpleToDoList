import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ToDoList = () => (
    <React.Fragment>
    <h1 className="m-3">My Todo List</h1>
          <ul className="list-group m-3">
            <li className="list-group-item">Wake up
            <button className="btn btn-sm btn-outline-success float-end"><FaCheck /></button>
            </li>
            <li className="list-group-item">Drink coffee
            <button className="btn btn-sm btn-outline-success float-end"><FaCheck /></button>
            </li>
            <li className="list-group-item">Take a shower
            <button className="btn btn-sm btn-outline-success float-end"><FaCheck /></button>
            </li>
            <li className="list-group-item">Start Teams
            <button className="btn btn-sm btn-outline-success float-end"><FaCheck /></button>
            </li>
          </ul>
    </React.Fragment>
)

export default ToDoList;