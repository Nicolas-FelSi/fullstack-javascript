import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'


function RoutesApp() {
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/sobre' element={<Sobre />}></Route>
            <Route path='/contato' element={<Contato />}></Route>

            {/* <Route path='*' element={<Home />}></Route> */}
        </Routes>
    </BrowserRouter>
}