import './App.css'
import Home from './components/Home/home'
import Master from './components/Outlet/master'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PersonalityDetails from './components/Home/Personalities/PersonalityDetails'

function App() {

  const route = createBrowserRouter([
    {
      path:'/',
      element:<Master/>,
      children:[
        {index: true, element: <Home/>},
        {path: "home", element: <Home/>},
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
