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
            <h1 className="text-8xl text-white font-thin">Hello World!</h1>
          </div>
        ),
      },
      { image: '/static/banner-foreground.png', speed: -10 },
    ]}
    className="aspect-[2/1]"
  />
</ParallaxProvider>

);
} 

// add/find out how to get images to render eiter using your own images or ones from internet. Might have to manually upload and style with CSS
// and dont forget to check out other sites on phone