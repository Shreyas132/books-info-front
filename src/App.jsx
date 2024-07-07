import React from 'react'
import {Route,Routes} from 'react-router-dom'
import {Create,Delete,Update,Home,Show} from './Pages/xportcomps'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/books/create' element={<Create/>}  />
      <Route path='/books/details/:id' element={<Show />}  />
      <Route path='/books/edit/:id' element={<Update />}  />
      <Route path='/books/delete/:id' element={<Delete />}  />
    </Routes>
  )
}

export default App