
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import DefLayout from './layout/autlet'
import DetailsProd from './pages/DetailsProdotto'

function App() {
  

  return (
     <BrowserRouter>
     <Routes>
      <Route element={<DefLayout />}>
      <Route path="/" element={<HomePage/>} />
      <Route path="/chiSiamo" element={<ChiSiamo/>} />
      <Route path="/prodotti" element={<Prodotti/>} />
      <Route path='/prodotti/:id' element={<DetailsProd/>} />
      </Route>
     </Routes>
     </BrowserRouter>
  )
}

export default App
