import { createBrowserRouter, RouterProvider, } from "react-router-dom"

import Home from "./pages/Home"

//layout
import MainLayout from "./layout/MainLayout"
import Tickets from "./pages/Tickets"
import Ticket from "./pages/Ticket"
import Create from "./pages/Create"

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'tickets',
          element: <Tickets />
        },
        {
          path: 'tickets/:id',
          element: <Ticket />
        },
        {
          path: 'create',
          element: <Create />,
        }
      ]
    },
  ])

  return (
    <div className="font-inter">
      <RouterProvider router={routes} />
    </div>
  )
}

export default App 