import React, {useEffect, useState} from 'react';
import './background.css'

export default function Background ({navState, setNavState}) {

    const [dimensions, setDimensions] = useState(
        {
            height: window.innerHeight,
            width: window.innerWidth
        }
        
    )

    //Handle Resize
    useEffect(() => {
        function handleResize() {
            setDimensions (
                {
                    height: window.innerHeight,
                    width: window.innerWidth
                }
            )
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
              
        }
    })

    //Correct resize on scroll
    useEffect(() => {
        function handleResizeOnScroll() {
            setDimensions (
                {
                    height: window.innerHeight,
                    width: window.innerWidth
                }
            )
        }
        window.addEventListener('scroll', handleResizeOnScroll)
        return _ => {
            window.removeEventListener('scroll', handleResizeOnScroll)
              
        }
    })

    
    class Circle {
        constructor(x, y, r, color, text) {
            this.x = x;
            this.y = y;
            this.r = dimensions.width < 700 ? r : dimensions.width / 200 * parseInt(r);
            this.color = color
            this.text = text || ''
        }
        move(x, y) {
            this.x = x;
            this.y = y;
        }
        setRadius(r) {
            this.r = dimensions.width < 700 ? parseInt(r) + 5 + 'vw': dimensions.width / 200 * parseInt(r);
            dimensions.width < 700 ? console.log (r) : console.log (dimensions.width)

        }
        setText(text) {
            this.text = text || ''
        }
    }

    let circle0 = new Circle('81vw', '4vh', '19vw', '#FDFFB2', 'Home')
    let circle1 = new Circle('59vw', '25vh', '23vw', '#96DFFF', 'About Me')
    let circle2 = new Circle('0vw', '30vh', '35vw', '#FF8B8B', 'Past Projects')
    let circle3 = new Circle('37vw', '60vh', '19vw', '#7451FF', 'Contact')
    let circle4 = new Circle('76vw', '80vh', '9vw', '#B6FF9C')
    let circle5 = new Circle('1vw', '85vh', '17vw', '#B3B3B3')

    function setOpenNavCircleCoords() {
        circle0.move('15vw', '8vh')
        circle1.move('50vw', '20vh')
        circle2.move('10vw', '35vh')
        circle3.move('45vw', '63vh')

        circle0.setRadius('19vw')
        circle1.setRadius('23vw')
        circle2.setRadius('40vw')
        circle3.setRadius('19vw')
    }

    if (navState) {
        setOpenNavCircleCoords()
    }
    
    const circlesNav = [circle0, circle1, circle2, circle3]
    const circlesOther = [circle4, circle5]

    return (
        <div>

        <div className = {`circle-con ${navState ? 'content-open' : ''}`}>

            {/* Create interactive circles */}
            {circlesNav.map((circle, i) => (
                <div 
                    className={`circle ${navState ? 'transition focus' : ''}`}
                    key={i}
                    style={{width: circle.r, height: circle.r, backgroundColor: circle.color, right: circle.x, top: circle.y}}
                >

                    {/* {navState ? <h2 className='nav-h2'>{circle.text}</h2> : <></>} */}
                    <h2 
                    className={`${navState ? 'show-nav-h2' : 'no-nav-h2'}`}
                    >{circle.text}</h2>
                
                </div>
            ))}

            {/* Create non interactive circles */}
            {circlesOther.map((circle, i) => (
                <div 
                    className='circle'
                    key={i}
                    style={{width: circle.r, height: circle.r, backgroundColor: circle.color, right: circle.x, top: circle.y,}}
                >
                
                </div>
            ))}
            
            </div>
            <div className='background-color'>

            </div>
        </div>

    )
}