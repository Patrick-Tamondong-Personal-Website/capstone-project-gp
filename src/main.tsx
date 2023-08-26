import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Index from './pages/Index';
import Product from './pages/Product';
import Profile from './pages/Profile';
import Root from './pages/Root';
import SearchResult from './pages/SearchResult';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ErrorPage from './pages/ErrorPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      //loader={localStorageLoader}
      //action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route 
          index 
          element={<Index />}
          //loader={allPostsLoader}
        />
        <Route
          path="/search/*"
          element={<SearchResult />}
          //loader={postLoader}
        />
        <Route
          path="/products/:productId"
          element={<Product />}
          //loader={singlePostLoader}
          //action={postAction}
        />

        <Route
          path="/profile"
          element={<Profile />}
          //loader={profileLoader}
        />
         <Route
          path="/sign-in"
          element={<SignIn />}
        />
         <Route
          path="/sign-up"
          element={<SignUp />}
        />
      </Route>
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
