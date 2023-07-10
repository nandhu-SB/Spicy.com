import './ScrollPics..css'
import f4 from './assets/food/f4.jpeg'
import f5 from './assets/food/f5.jpeg'
import f7 from './assets/food/f7.jpeg'
import f8 from './assets/food/f8.jpeg'
function menu(){
    return(
        <div className="menu">
            <ul>
                <li><img src={f4}/></li>
                <li><img src={f5}/></li>
                <li><img src={f7}/></li>
                <li><img src={f8}/></li>
  
                

            </ul>
        </div>

    )
}export default menu