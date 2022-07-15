import React, {useRef, useEffect, useState} from 'react';
import './canvas.css'

export default function Canvas() {
    const canvasRef = useRef(null);
    
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

    //Draw Circles
    function drawCircle(x, y, r, sAngle, eAngle, fill, ctx) {
        ctx.beginPath()
        ctx.arc(dimensions.width / x, dimensions.height / y, dimensions.width <= 700 ? dimensions.width / r : 700 / r, sAngle, eAngle);
        ctx.fillStyle = fill;
        ctx.strokeStyle = fill;
        ctx.fill();
        ctx.stroke();
    }
    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        //x, y, r, start angle, end angle, full, pass ctx
        drawCircle(10, 17, 13, 0, 2*Math.PI, '#FDFFB2', ctx)        //Yellow
        drawCircle(3, 4, 10, 0, 2*Math.PI, '#96DFFF', ctx)          //Blue
        drawCircle(1.205, 2.3, 6, 0, 2*Math.PI, '#FF8B8B', ctx)       //Red
        drawCircle(2, 1.5, 13, 0, 2*Math.PI, '#7451FF', ctx)        //Purple
        drawCircle(5, 1.2, 25, 0, 2*Math.PI, '#B6FF9C', ctx)        //Green
        drawCircle(1.08, 1.04, 15, 0, 2*Math.PI, '#B3B3B3', ctx)    //Grey
        

        //CLEAR CANVAS
        // ctx.clearRect(0, 0, dimensions.width, dimensions.height);
    })
    


    return (
        <div>
            <canvas
                ref={canvasRef} 
            width={dimensions.width} 
            height={dimensions.height}
            >

            </canvas>
        </div>
    )
}