import './bootstrap';
import '../css/app.css'

import ReactDOM from 'react-dom/client';        
import Home from './Pages/Homepage/Home';

import { Guides } from './Pages/Guides';

ReactDOM.createRoot(document.getElementById('app')).render(   

    <Home />        
);