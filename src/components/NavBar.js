import React from 'react';
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
    <footer className="p-3 bg-light">
        <div className="btn-group">
            <NavLink to="/" className="btn btn-outline-dark"><FaListAlt /></NavLink>
            <NavLink to="/completed" className="btn btn-outline-dark"><FaCheckSquare /></NavLink>
            <NavLink to="/add-task" className="btn btn-outline-dark"><FaPlusSquare /></NavLink>
        </div>
        <button className="btn btn-sm btn-outline-dark float-end"><FaTrash /></button>
    </footer>
)

export default NavBar