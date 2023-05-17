import { ParallaxBanner,} from 'react-scroll-parallax';
import { ParallaxBannerLayer,} from 'react-scroll-parallax';
import { ParallaxProvider,} from 'react-scroll-parallax';
import React from 'react';
import logo from "./ResumeNew.png";
import Pdf from "../Components/MyResume.pdf";



export default function Resume() {
    return (

        <ParallaxProvider>
        <ParallaxBanner
        // <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
        // <ParallaxBannerLayer>
        layers={[
      { image: logo, speed: -0 },
    
      {
        speed: -20,
        children: (
          <div className="absolute inset-0 flex items-center justify-center">
            <a href= {Pdf}>
            <h2 className="text-6xl text-blue font-thin">My Resume</h2>
            </a>
          </div>
        ),
      },
    
    ]}
        className='aspect-[20/10]'
           
          />
        {/* // </ParallaxBannerLayer> */}
      </ParallaxProvider>


// export  default function Resume() {
//     let url = "MyResume.pdf"
//     return (
//         <div className="dhall">
//         <a href={Pdf}  target="_blank">
//         <img src={logo} alt="resume" className="bg-image hover-overlay hover-zoom hover-shadow" 
//         style={{ alignSelf: 'center' }} />
//         </a>
//     </div>
    );
}