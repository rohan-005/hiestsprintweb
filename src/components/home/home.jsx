import Navbar from "../navbar/navbar";
import VideoBackground from './video'
import Characters from './characters';
import Thanksto from './thanks';
import Footer from "./footer";

function Home(){
    return (
    <div>
      <Navbar/>
      <VideoBackground/>
      <Characters/>
      <Thanksto/>
      <Footer/>
    </div>
    )
}

export default Home