import React from 'react';
import Calendar from '../components/Calendar';
import AddNewButton from '../components/AddNewButton';

function Dashboard() {
  return (
    <div className="p-4 dashboard">
      <Calendar />
      <AddNewButton />
    </div>
  );
}

export default Dashboard;
