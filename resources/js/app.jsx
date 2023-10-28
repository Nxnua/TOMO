import "../css/app.css";
import { useState } from "react";
import ReactDOM from 'react-dom/client';        
import Home from './Pages/Homepage/Home';
import Plantrip from './Pages/PlanTrip';
import { Guides } from './Pages/Guides';
import Map from './Pages/Homepage/Map';
import Main from "./Pages/Homepage/Main";
import TripComponent from "./components/tripComponent";
import Trips fromgit  './Pages/Trips';

ReactDOM.createRoot(document.getElementById('app')).render(     
    <Trips />        
)
