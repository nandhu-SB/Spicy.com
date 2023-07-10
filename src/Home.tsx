import './Home.css'
import Navbar from './Navbar'
import Menu from './ScrollPics'
import Footer from './footer'
import Text from './Text'
import ImageSlider from './ImageSlider'
import Testimonial from './testimonial'




function App() {

  return (
    <div className='container'>
      <Navbar/>
      
      <ImageSlider/>
      <Text/>
      <Menu/>
      <Testimonial/>

      
      <Footer/>
      
    </div>
  )
}

export default App
