import './bootstrap';
import '../css/app.css'

import ReactDOM from 'react-dom/client';        
import Home from './Pages/Homepage/Home';
import Plantrip from './Pages/PlanTrip';

ReactDOM.createRoot(document.getElementById('app')).render(     
    <Plantrip />        
);
