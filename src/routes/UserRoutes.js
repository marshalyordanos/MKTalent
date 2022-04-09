import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutApp from '../components/layout/LayoutApp'
import Posts from '../pages/Posts'

const UserRoutes = () => {
  return (
    <div>
        <LayoutApp>
            <Routes>
                <Route path='m' element={<Posts/>}  />
            </Routes>
        </LayoutApp>
    </div>
  )
}

export default UserRoutes