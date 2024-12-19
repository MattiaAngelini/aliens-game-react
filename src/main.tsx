import App from './App.tsx'
import Game from './Game.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
// @ts-ignore
import store from './redux/store.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/Game",
    element: <Game></Game>
  }

])

createRoot(document.getElementById('root')!).render(
 
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </StrictMode>,

)
