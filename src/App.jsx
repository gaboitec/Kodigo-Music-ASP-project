import './assets/CSS/App.css'
import {Proveedor} from './context/ContextoUsuario';
import {Home} from './pages/home/Home';
import {Session} from './pages/session/Session';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <>
        <Proveedor>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/session' element={<Session />} />
                </Routes>
            </BrowserRouter>
        </Proveedor>
    </>
  )
}

export default App
