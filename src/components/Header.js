
import React from 'react';
import {NavLink } from 'react-router-dom';

const Header = () => {
    return(
    <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
            <div class=" box p-4">
            <NavLink to='/' class="around">Home</NavLink>
            <NavLink to='/' class="around">Profile</NavLink>
            <NavLink to='/' class="around">Calculator</NavLink>
            </div>
        </div>
        <nav class="navbar navbar-dark box1">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
             </button>
        </nav>
   </div>
    )
}
export default Header;