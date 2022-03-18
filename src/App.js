import './App.css';
import Header from './components/homepage/Header';
import Header_resp from './components/homepage/Header_resp';
import TopBox from './components/homepage/TopBox';
import GalleryBox from "./components/homepage/GalleryBox"
import RoomsBox from "./components/homepage/RoomsBox"
import ServicesBox from "./components/homepage/ServicesBox"
import Footer from "./components/homepage/Footer"
import Footer_resp from "./components/homepage/Footer_resp"
//for function Scrolling
// import { useScrollTo } from "react-use-window-scroll";

function App() {


  // function Scrolling isn't working
  // function Scrolling(els) {
  //   return (
  //     <div>
  //       {
  //         els.map((el) => {
  //           el.scrollTo(0, 1000)= useScrollTo()
  //         })
  //       }
  //     </div >
  //   )
  // }



  return (

    <div className="wrapper">
      <Header_resp />
      <Header />
      <div className="main_page">
        <TopBox />
        <GalleryBox />
        <RoomsBox />
        <ServicesBox />
      </div>
      <Footer />
      <Footer_resp />
    </div>
  );
}

export default App;