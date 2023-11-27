import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import MoviePage from './components/MoviePage/MoviePage';
import { store } from './store'
import { Provider } from 'react-redux'
import Wrapper from './components/Wrapper/Wrapper';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  createRoutesFromElements,
  Route
} from "react-router-dom";

const router = createBrowserRouter(
  
  createRoutesFromElements(
    <>
      <Route path="/" element={<App /> } />
      <Route path="/movie/:movieId" element={<MoviePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </>
    
  )
);

const rootElement = document.getElementById('root');


const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
   <Wrapper>
    <RouterProvider router={router} />
    </Wrapper>
  </Provider>
);
