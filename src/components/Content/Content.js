import React, {useState} from 'react';
import './content.css'

//components
import Landing from './Landing/Landing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faX} from '@fortawesome/pro-light-svg-icons' 

export default function Content({navState, setNavState}) {
    return (
        <div className={`content ${navState ? 'content-closed' : 'content-open'}`}>
                <FontAwesomeIcon 
                icon={faX}
                className={`'fa-x' ${navState ? 'fa-x-open' : 'fa-closed'}`}
                onClick={() => {
                    setNavState(false)
                }}
                />
            <section className={`${navState ? 'contentClose' : 'contentOpen'}`}>
            <div className='fa-bars-nav-con'>
                <FontAwesomeIcon 
                icon={faBars} 
                // icon={faBlindsOpen} 
                className={`${navState ? 'fa-closed' : 'fa-bars'}`}
                onClick={() => {
                    setNavState(true)
                }}
                />
            </div>
                <Landing></Landing>
            </section>
        </div>
    )
}