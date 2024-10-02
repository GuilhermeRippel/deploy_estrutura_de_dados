import './App.css'
import Main from './pages/main'
import Square from './pages/square'
import Circle from './pages/circle'
import Triangle from './pages/triangle'
import Retangle from './pages/retangle'
import Triangle2 from './pages/triangle2' 
import Circle2 from './pages/circle2'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Square" element={<Square/>}/>
        <Route path="/Circle" element={<Circle/>}/>
        <Route path="/Circle2" element={<Circle2/>}/>
        <Route path="/Triangle" element={<Triangle/>}/>
        <Route path="/Triangle2" element={<Triangle2/>}/>
        <Route path="/Retangle" element={<Retangle/>}/>
      </Routes>
    </Router>
  )
}

export default App
