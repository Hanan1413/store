import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct} from './pages';
  
import { ErrorElement } from './components';


//loader

import {loader as landingLoader} from './pages/Landing';

//actions

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout />,
    errorElement:<Error />,
    children:[
      {index: true,
        element: <Landing/>,
        errorElement:<ErrorElement />,
        loader: landingLoader,
      },
      {path: 'products',
        element: <Products/>
      },
      {path: 'products/:id',
        element: <SingleProduct/>
      },
      {path: 'cart',
        element: <Cart/>
      },
      {path: 'about',
        element: <About/>
      },
      {path: 'checkout',
        element: <Checkout />
      },
      {path: 'orders',
        element: <Orders />
      },

      
    ]

  },
  {
    path:'/login',
    element: <Login />,
    errorElement:<Error />,
  

  },
  {
    path:'/register',
    element: <Register />,
    errorElement:<Error />,

  }
])

export default function App() {
  return <RouterProvider  router={router} />
}
