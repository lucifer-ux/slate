import './App.css';
import Carousel from './Carousel/Carousel';
import GameLibraries from './GameLibraries/GameLibraries';
import Navbar from './Navbar/Navbar';
import SideSlider from './SideSlider/SideSlider';
import Slider from './Slider/Slider';
// import SpecialOffersSlider from './SpecialOfferSlider/SpecialOfferSlider';
import EntertainmentApps from './EntertainmentApps/Entertainment'
import {React, useState } from 'react'

function App() {
  const [searchImage, setSearchImage] = useState('');
  const [activeComponent, setActiveComponent] = useState('Home');

  const renderActiveComponent = () => {
    console.log(activeComponent)
    switch (activeComponent) {
      case "Home":
         return <Slider/>;
      case "Library":
        return <GameLibraries/>;
      case "Entertainment":
        return <EntertainmentApps/>
      default:
        return <Carousel/>;
    }
  }

  return (
    <div className="App">
     <Navbar setSearchImage = {setSearchImage}/>
     <SideSlider setActiveComponent = {setActiveComponent}/>
     <div className='main-content'>
      {renderActiveComponent()}
     </div>
    </div>
  );
}

export default App;
