import React from 'react';
import ReactDom from 'react-dom/client';
import { Layout } from './Layout';
// console.log(Layout);

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello Worlddd</div>,
  },
]);

ReactDom.createRoot(document.getElementById('root')).render(<Layout />);
