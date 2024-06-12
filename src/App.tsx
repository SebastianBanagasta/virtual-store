import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Cart } from './views/Cart/Cart'
import { Details } from './views/Details/Details'
import { Home } from './views/Home'
import { NotFound } from './views/NotFound/NotFound'

function App() {
  
  const browserRouter = createBrowserRouter([
    { path:'/',element:<Home /> },
    { path:'/details/:id',element:<Details /> },
    { path:'/cart',element:<Cart /> },
    { path:'/*',element:<NotFound /> },
  ])

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  )
}

export default App
