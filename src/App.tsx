import './App.css'
import Details from './components/details'
import Home from './components/Home/home'
import Master from './components/master'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const route = createBrowserRouter([
    {

      path:'/',
      element:<Master/>,
      children:[
        {index: true, element: <Home/>},
        {path: "home", element: <Home/>},
        {path: "details/:id", element: <Details/>},

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
