import './App.css';


import Header from './components/Header';
import Header_resp from './components/Header_resp';
import TopBox from './components/TopBox';
import GalleryBox from "./components/GalleryBox"
import RoomsBox from "./components/RoomsBox"
import ServicesBox from "./components/ServicesBox"
import Footer from "./components/Footer"
import Footer_resp from "./components/Footer_resp"
// import "./responsive390.css"

//for function Scrolling
// import { useScrollTo } from "react-use-window-scroll";


function App() {


  // bars show, hide states

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