import { Calendar as ReactBigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import React, { useState } from 'react';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import AddOrEditEventModal from './AddOrEditEventModal';

// import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const DnDCalendar = withDragAndDrop(ReactBigCalendar);

function Calendar() {
  const [events, setEvents] = useState([
    {
      id: 'id1',
      start: new Date(),
      end: new Date(),
      title: 'Danasnji',
      duration: null,
    },
    {
      id: 'id2',
      start: new Date(2023, 6, 1),
      end: new Date(2023, 6, 4),
      title: 'Drugi',
      duration: null,
    },
    {
      id: 'id3',
      start: new Date(2023, 6, 7),
      end: new Date(2023, 6, 8),
      title: 'Treci',
      duration: null,
    }]);
  console.log(events);

  const onEventResize = (data) => {
    const { start, end, event: selectedEvent } = data;

    setEvents((prevState) => (
      prevState.map((event) => (event.id === selectedEvent.id ? ({ ...event, start, end }) : event))
    ));
  };

  const onEventDrop = (data) => {
    const { start, end, event: selectedEvent } = data;

    setEvents((prevState) => (
      prevState.map((event) => (event.id === selectedEvent.id ? ({ ...event, start, end }) : event))
    ));
  };

  return (
    <>
      <AddOrEditEventModal />
      <DnDCalendar
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        localizer={localizer}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        resizable
        startAccessor="start"
        endAccessor="end"
        className="calendar"
      // style={{ height: '90vh', width: '75vw' }}
        selectable
        onNavigate={(date, views) => {
          console.log('onNavigate', date, views);
        }}
        onView={(view) => {
          console.log('onView', view);
        }}
        onSelectSlot={(slot) => console.log('onSelectSlot', slot)}
        onSelectEvent={(event) => console.log('onselectevent', event)}
      />
    </>
  );
}

export default Calendar;
