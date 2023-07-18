import React from 'react';

import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Provider } from 'react-redux';
import Dashboard from './containers/Dashboard';
import store from './redux/store';
import LayoutWithToastMessages from './layouts/LayoutWithToastMessages';
import NavigationOutlet from './outlets/NavigationOutlet';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutWithToastMessages />}>
            <Route element={<NavigationOutlet />}>
              <Route path="/*" element={<Dashboard />} />
            </Route>
            {/* <Route path="sign-up/:id" element={<SignUp />} />
            <Route exact path="forgot-password" element={<ForgotPassword />} />
            <Route path="forgot-password/:guid" element={<ChangePassword />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="*" element={<PageNotFound />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
