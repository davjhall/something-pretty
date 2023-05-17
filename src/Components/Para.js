import { ParallaxBanner,} from 'react-scroll-parallax';
import { ParallaxProvider,} from 'react-scroll-parallax';
import React from 'react';
import starrey from "./images/starrysea.jpg"

export default function Para() {
  return (
   
    <ParallaxProvider>
    <ParallaxBanner
    layers={[
      { image: starrey, speed: -20 },
      {
        speed: -15,
        children: (
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-8xl text-white font-thin">David Hall, Software Developer</h1>
          </div>
        ),
      },
      { image: '/static/banner-foreground.png', speed: -20 },
    ]}
    className="aspect-[2/1]"
  />
</ParallaxProvider>

);
} 

// see about making the whole background one
// zoom out starry sky bg
// link the nav buttons to parts of the page
// Animation to the D Hall Dev words possibly
// would love some spinning/animated links to other projects
// resume pic infront of a background that you can still click on
// and dont forget to check out other sites on phone