import React from 'react';
import './landing.css'

//images
import landingSelfie from "../../../assets/images/selfie.png"

export default function Landing () {

    return (
        <div className='landing'>
            <section>
            <img width='50%' src={landingSelfie} alt='Image of myself, Aidan Meyer'/>
            <div>
            <h3>Hello! My name is</h3>
            <h2>Aidan Meyer</h2>
            <h3>Software Developer</h3>
            </div>
            </section>

            <nav>
            <h3>About</h3>
            <h3>Past Projects</h3>
            <h3>Contact</h3>
            </nav>

        </div>
    )
}