import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Profile from './profile'
import Main1 from './main'

function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' elements={<Profile />}>
                    <Route index element={<Main1 />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router