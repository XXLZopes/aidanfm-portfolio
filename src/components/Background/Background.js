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

    // class Circle {
    //     constructor(x, y, r, color, text) {
    //         this.x = dimensions.width / x || 0;
    //         this.y = dimensions.height / y || 0;
    //         this.r = dimensions.width <= 700 ? dimensions.width / r : 700 / r;
    //         this.color = color
    //         this.text = text || ''
    //     }
    //     move(x, y) {
    //         this.x = dimensions.width / x || 0;
    //         this.y = dimensions.height / y || 0;
    //     }
    //     setRadius(r) {
    //         this.r = dimensions.width <= 700 ? dimensions.width / r : 700 / r;
    //     }
    //     setText(text) {
    //         this.text = text || ''
    //     }
    // }
    
    class Circle {
        constructor(x, y, r, color, text) {
            this.x = x;
            this.y = y;
            this.r = window.innerWidth < 700 ? r : dimensions.width / 200 * parseInt(r.split('')[0] + r.split('')[1]);
            this.color = color
            this.text = text || ''
        }
        move(x, y) {
            this.x = x;
            this.y = y;
        }
        setRadius(r) {
            this.r = r;
        }
        setText(text) {
            this.text = text || ''
        }
    }

    let left_ = dimensions.width
    let bottom_ = 1.11

    // let circle0 = new Circle(1.215, 25, 5.7, '#FDFFB2', 'Home')
    // let circle1 = new Circle(1.7, 3.5, 4.6, '#96DFFF', 'About Me')
    // let circle2 = new Circle(left_, 2.7, 2.75, '#FF8B8B', 'Past Projects')
    // let circle3 = new Circle(3, 1.5, 5.7, '#7451FF', 'Contact')
    // let circle4 = new Circle(1.25, 1.25, 11, '#B6FF9C')
    // let circle5 = new Circle(left_, bottom_, 6, '#B3B3B3')

    let circle0 = new Circle('81vw', '4vh', '19vw', '#FDFFB2', 'Home')
    let circle1 = new Circle('59vw', '30vh', '23vw', '#96DFFF', 'About Me')
    let circle2 = new Circle('0vw', '35vh', '35vw', '#FF8B8B', 'Past Projects')
    let circle3 = new Circle('37vw', '65vh', '19vw', '#7451FF', 'Contact')
    let circle4 = new Circle('76vw', '85vh', '9vw', '#B6FF9C')
    let circle5 = new Circle('0vw', '90.3vh', '17vw', '#B3B3B3')

    function setOpenNavCircleCoords() {
        circle0.move('15vw', '8vh')
        circle1.move('50vw', '25vh')
        circle2.move('15vw', '40vh')
        circle3.move('45vw', '70vh')
        // circle4.move(1.25, 1.3)

        circle0.setRadius('19vw')
        circle1.setRadius('23vw')
        circle2.setRadius('35vw')
        circle3.setRadius('19vw')
    }

    // function setCloseNavCircleCoords() {
        // circle0.move('81vw', '4vh')
        // circle1.move('59vw', '30vh')
        // circle2.move('0vw', '35vh')
        // circle3.move('37vw', '65vh')
        // circle4.move('76vw', '85vh')
    // }

    if (navState) {
        setOpenNavCircleCoords()
    }

    // navState ? setOpenNavCircleCoords() : setCloseNavCircleCoords();
    
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