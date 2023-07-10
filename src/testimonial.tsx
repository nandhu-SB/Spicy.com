import './testimonial.css'
import r1 from './assets/reviews/r1.jpeg'
import r2 from './assets/reviews/r2.jpeg'

import r3 from './assets/reviews/r3.jpeg'

function testimonial(){
    return(
        <div className="testimonial">
         
               <img src={r1} alt="review"/>
               <img src={r2}alt="review"/>
               <img src={r3}alt="review"/>
           
        </div>
    )
}export default testimonial