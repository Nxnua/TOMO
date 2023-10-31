import "../css/app.css";
import { useState } from "react";
<<<<<<<<< Temporary merge branch 1
import ReactDOM from 'react-dom/client';        
import Home from './Pages/Homepage/Home';
import Plantrip from './Pages/PlanTrip';
import { Guides } from './Pages/Guides';
import Map from './Pages/Homepage/Map';

ReactDOM.createRoot(document.getElementById('app')).render(     
    <Guides />        
)
=========

import ReactDOM from "react-dom/client";
import Home from "./Pages/Homepage/Home";
import Plantrip from "./Pages/PlanTrip";
import Trips from "./Pages/Trips";
import { Guides } from "./Pages/Guides";
import Map from "./Pages/Homepage/Map";
import Movement from "./components/bannerSVG";
import { TripDetail } from "./Pages/TripDetail";

ReactDOM.createRoot(document.getElementById("app")).render(<Trips />);
>>>>>>>>> Temporary merge branch 2
