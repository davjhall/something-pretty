import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { ParallaxProvider } from "react-scroll-parallax";






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    
        <React.StrictMode>
        <ParallaxProvider >

          <App />

        </ParallaxProvider>
      </React.StrictMode>
    );
    


