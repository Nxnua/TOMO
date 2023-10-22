import './bootstrap';
import '../css/app.css'
import { useState } from "react";
import ReactDOM from 'react-dom/client';        
import Home from './Pages/Homepage/Home';

ReactDOM.createRoot(document.getElementById('app')).render(     
    <Home />        
);