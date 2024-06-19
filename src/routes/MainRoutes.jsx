import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Detail from '../components/Detail'

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/product/:id' element={<Detail />} />
    </Routes>
    </>
  )
}

export default MainRoutes