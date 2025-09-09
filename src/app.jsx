import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { RouterProvider } from "react-router-dom";
import { routes } from "./routersConfi";


const App = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;