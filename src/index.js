import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import MoviePage from './components/MoviePage/MoviePage';
import { store } from './store';
import { Provider } from 'react-redux';
import Wrapper from './components/Wrapper/Wrapper';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Recommend from './components/Recommend/Recommend';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Wrapper />}>
      <Route path="/" element={<App />} />
      <Route path="/recommend" element={<Recommend />} />
      <Route path="/movie/:movieId" element={<MoviePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>,
  ),
);

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
