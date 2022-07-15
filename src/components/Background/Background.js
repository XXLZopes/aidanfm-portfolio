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

    class Circle {
        constructor(x, y, r, color, text) {
            this.x = dimensions.width / x || 0;
            this.y = dimensions.height / y || 0;
            this.r = dimensions.width <= 700 ? dimensions.width / r : 700 / r;
            this.color = color
            this.text = text || ''
        }
        move(x, y) {
            this.x = dimensions.width / x || 0;
            this.y = dimensions.height / y || 0;
        }
        setRadius(r) {
            this.r = dimensions.width <= 700 ? dimensions.width / r : 700 / r;
        }
        setText(text) {
            this.text = text || ''
        }
    }

    let left_ = dimensions.width
    let bottom_ = 1.11

    let circle0 = new Circle(1.215, 25, 5.7, '#FDFFB2', 'Home')
    let circle1 = new Circle(1.7, 3.5, 4.6, '#96DFFF', 'About Me')
    let circle2 = new Circle(left_, 2.7, 2.75, '#FF8B8B', 'Past Projects')
    let circle3 = new Circle(3, 1.5, 5.7, '#7451FF', 'Contact')
    let circle4 = new Circle(1.25, 1.25, 11, '#B6FF9C')
    let circle5 = new Circle(left_, bottom_, 6, '#B3B3B3')

    function setOpenNavCircleCoords() {
        circle0.move(4, 25)
        circle1.move(2, 5)
        circle2.move(7, 3)
        circle3.move(2.2, 1.65)
        // circle4.move(1.25, 1.3)

        circle0.setRadius(5)
        circle1.setRadius(4)
        circle2.setRadius(2.2)
        circle3.setRadius(5)
        // circle4.setRadius(8.5)
        // circle5.setRadius(5.5)
    }

    function setCloseNavCircleCoords() {
        circle0.move(1.215, 25)
        circle1.move(1.7, 3.5)
        circle2.move(left_, 2.7)
        circle3.move(3, 1.5)
        circle4.move(1.25, 1.25)
    }

    navState ? setOpenNavCircleCoords() : setCloseNavCircleCoords();
    
    const circlesNav = [circle0, circle1, circle2, circle3]
    const circlesOther = [circle4, circle5]

    return (

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

    )
}