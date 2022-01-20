import React, {useState} from "react";
import './NavBar.css';
import NavItem from "./NavItem/NavItem";

import {ReactComponent as Arrow} from '../../../icons/arrow.svg';
import {ReactComponent as Bell} from '../../../icons/bell.svg';
import {ReactComponent as Bolt} from '../../../icons/bolt.svg';
import {ReactComponent as Caret} from '../../../icons/caret.svg';
import {ReactComponent as Chevron} from '../../../icons/chevron.svg';
import {ReactComponent as Cog} from '../../../icons/cog.svg';
import {ReactComponent as Messenger} from '../../../icons/messenger.svg';
import {ReactComponent as Plus} from '../../../icons/plus.svg';

function NavBar(props) {
    return(
        <nav className="navbar">
            <ul className="navbar-nav">

                <NavItem icon={<Plus />} />
                <NavItem icon={<Bell />} />
                <NavItem icon={<Messenger />} />

                <NavItem icon={<Caret />}>

                </NavItem>

            </ul>
        </nav>
    );
}

export default NavBar;