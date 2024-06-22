import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Detail from '../components/Detail'
import Create from '../components/Create'
import Update from '../components/Update'

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/product/:id' element={<Detail />} />
        <Route path='/edit/:id' element={<Update/>} />
        <Route path='/create' element={<Create />} />
    </Routes>
    </>
  )
}

export default MainRoutes