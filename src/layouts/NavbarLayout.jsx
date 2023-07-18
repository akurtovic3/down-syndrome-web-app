import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

// import { showToastErrorMessage } from '../features/toastSlice';
// import { fetchUser } from '../features/agendaSlice';
// import Header from '../components/dashboard/header';
// import PermissionWrapper from '../components/permissionWrapper';
// import { ROLES_PERMISSIONS } from '../constants';

function DashboardLayout() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(true);

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         await dispatch(fetchUser());
  //         setLoaded(true);
  //       } catch (error) {
  //         dispatch(showToastErrorMessage(t('error_message.dashboard.failed_users_data_loading')));
  //       }
  //     })();
  //   }, [dispatch]);

  return (
    loaded
      ? (
        <>
          <Navbar />
          <Outlet />
        </>
      )
      : (
        <div className="d-flex justify-content-center m-5 loader-wrapper">
          <div className="spinner-grow text-info loader" role="status" />
          <span className="loader-text">Loading</span>
        </div>
      )
  );
}

export default DashboardLayout;
