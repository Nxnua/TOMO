import './bootstrap';
import '../css/app.css'

import ReactDOM from 'react-dom/client';        
import Home from './Pages/Homepage/Home';
import Header from './Pages/Homepage/header';
import { Guides } from './Pages/Guides';

ReactDOM.createRoot(document.getElementById('app')).render(     
    <Guides />        
);