import React from 'react';
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from 'react-icons/fa';

const NavBar = () => (
    <footer className="p-3 bg-light">
        <div className="btn-group">
            <a href="#" className="btn btn-outline-dark"><FaListAlt /></a>
            <a href="#" className="btn btn-outline-dark"><FaCheckSquare /></a>
            <a href="#" className="btn btn-outline-dark"><FaPlusSquare /></a>
        </div>
        <button className="btn btn-sm btn-outline-dark float-end"><FaTrash /></button>
    </footer>
)

export default NavBar