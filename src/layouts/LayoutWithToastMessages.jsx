import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import CustomToast from '../components/CustomToast';

// import { handleSwitchingLastSelectedTeam, logout } from '../features/agendaSlice';

function LayoutWithToastMessages() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleInvalidToken = (e) => {
      if (e.key === 'x-access-token' && e.oldValue && !e.newValue) {
        // if user logs out in another tab
        //  dispatch(logout());
      }

      if (e.key === 'x-access-token' && !e.oldValue && e.newValue) {
        // if user logs in in another tab
        navigate('/');
      }
    };

    window.addEventListener('storage', handleInvalidToken);

    return function cleanup() {
      window.removeEventListener('storage', handleInvalidToken);
    };
  }, []);

  return (
    <>
      <Outlet />
      <CustomToast />
    </>
  );
}

export default LayoutWithToastMessages;
