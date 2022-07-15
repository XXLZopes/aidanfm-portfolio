import React from 'react';
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faX} from '@fortawesome/pro-light-svg-icons' 

export default function Nav ({navState, setNavState}) {

    return (

        <nav
            className={`${navState ? 'nav-open' : 'nav-closed'} `}
            >
            <FontAwesomeIcon 
            icon={navState ? faX : faBars} 
            className={`fa ${navState ? 'fa-x' : 'fa-bars'} `}
            onClick={() => {
                setNavState(!navState)
            }}
            />
        </nav>

    )
}