import budgetContext from './context/BudgetContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import DefLayout from './layout/autlet'
import DetailsProd from './pages/DetailsProdotto'
import { useState } from 'react'

function App() {
  
  const [budgetMode, setBudegtMode] = useState(false)

const toggleBudgetMode = () => setBudegtMode(prev => !prev);

 
  const getFilteredData = (dataArray) => {
    if (budgetMode) {
      return dataArray.filter(item => item.price <= 30);
    }
    return dataArray;
  };
  return (
    <budgetContext.Provider value={{ budgetMode, toggleBudgetMode, getFilteredData }}>
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
    </budgetContext.Provider>
    
  )
}

export default App
