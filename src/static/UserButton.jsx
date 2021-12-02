import React from 'react'
import { NavLink } from 'react-router-dom';

export default function UserButton({id}) {

    const navlink = "/uzivatel/"+id;

    return (
        <div>
            <NavLink className="nav-link" to={navlink}>
                 Uživatel s id: {id}
            </NavLink>
        </div>
    )
}
