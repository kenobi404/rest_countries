import { Countries, countriesLoaders, } from './Pages/Countries'
import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Layout from './Layout/Layout'
import Country, { countryLoader } from './Pages/Country'

import './App.css'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index 
      element={<Countries />} 
      loader={countriesLoaders}
      />
      <Route path="/:country" 
      element={<Country />} 
      loader={countryLoader}
      errorElement={<h1>No country exists</h1>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
