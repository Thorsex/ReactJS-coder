import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer text="Bienvenidos a LuxStore, donde la moda y el lujo se encuentran" />
    </div>
  )
}

export default App
