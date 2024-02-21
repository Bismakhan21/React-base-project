import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Login } from '../pages/Login';

import Home from '../pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup/>} />
    </Route>
  )
)


export const Router_App = () => {


  return (
    <RouterProvider router={router} />
  )
}