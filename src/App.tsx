import './App.css'
import Details from './components/details'
import Home from './components/Home/home'
import Master from './components/master'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PersonalityDetails from './components/PersonalityDetails'

function App() {

  const route = createBrowserRouter([
    {
      path:'/',
      element:<Master/>,
      children:[
        {index: true, element: <Home/>},
        {path: "home", element: <Home/>},
        {path: "details/:id", element: <Details/>},
        {path: "personality/:id", element: <PersonalityDetails />},
      ]
    }
  ]
  )


  return (
    <>
   <RouterProvider router={route} ></RouterProvider>

    </>
  )
}

export default App
